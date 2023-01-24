// this is a very simple implementation of rot13 cypher over sockets, to avoid primitive
// deep packet inspection (https://gist.github.com/gmurdocca/88857b58dc4668d88b0d0fae6ebf8b64);
// a more robust solution would be to use obs4 (https://github.com/Yawning/obfs4), which
// implements the ScrambleSuit protocol as a tor transport plugin with a standalone
// runner/wrapper (for example https://github.com/twisteroidambassador/ptadapter in python)
const net = require('net');
const parseIpPort = (s = '') => ({ ip: s.split(':')[0], port: parseInt(s.split(':')[1], 10) });
const addrs = { from: parseIpPort(process.argv[2]), to: parseIpPort(process.argv[3]) };
const ports = { from: addrs.from.port, to: addrs.to.port };
const hosts = { from: addrs.from.ip, to: addrs.to.ip };
const rot = parseInt(process.argv[4] === undefined ? '0' : process.argv[4], 10);

if (['-h', '--help', '/?'].includes(process.argv[2])) {
  console.info('Usage: node . from-ip:port to-ip:port rotation');
  console.info('Example: (server runs a web server on port 80)');
  console.info('  client: node . 127.0.0.1:8080 192.168.0.123:8080 13');
  console.info('  server: node . 192.168.0.123:8080 127.0.0.1:80 -13');
  process.exit(0);
}

function shiftBuffer(buf, change = 0, nop = false) {
  if (nop) return buf;
  const ret = [];
  for (const value of buf.values()) {
    ret.push(value + change);
  }
  return Buffer.from(ret);
}

function doRotForward() {
  console.info(`Connecting ${hosts.from}:${ports.from} to ${hosts.to}:${ports.to}, rot is ${rot}`);
  const server = net.createServer({ allowHalfOpen: true }, (from) => {
    const to = net.createConnection({ host: hosts.to, port: ports.to, allowHalfOpen: true });
    // from --->>> to
    from.on('data', (chunk) => {
      to.write(shiftBuffer(chunk, rot, false));
      console.info(`-> ${chunk.length} bytes`);
    });
    from.on('end', () => {
      console.info('source disconnected');
    });
    from.on('error', (err) => {
      console.info('source error', err);
    });
    // from <<<--- to
    to.on('data', (chunk) => {
      from.write(shiftBuffer(chunk, rot * -1, false));
      console.info(`<- ${chunk.length} bytes`);
    });
    to.on('end', () => {
      console.info('target disconnected');
    });
    to.on('error', (err) => {
      console.info('target error', err);
    });
  });
  server.listen(ports.from, hosts.from);
}

doRotForward();
