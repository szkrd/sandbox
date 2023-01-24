const net = require('net');
const spawn = require('child_process').spawn;
const ports = [80, 3389];
const sleepSecs = 30;
const interfaceMatcher = /(169\.254\.[\d\.]+)/;

function doForward(listenInterface = '0.0.0.0') {
  const server = net.createServer(function (from) {
    const to = net.createConnection({ host: '127.0.0.1', port: ports[1] });
    from.pipe(to).on('error', (err) => console.log('from error', err.code));
    to.pipe(from).on('error', (err) => console.log('to error', err.code));
  });
  server.listen(ports[0], listenInterface);
}

function getListenIp() {
  return new Promise((resolve, reject) => {
    let ip = '';
    const child = spawn('ipconfig');
    child.stdout
      .on('data', (data) => {
        const match = data.toString().match(interfaceMatcher);
        if (Array.isArray(match) && match.length === 2) return resolve((ip = match[0]));
      })
      .on('end', () => (!ip ? reject(false) : null));
  });
}

async function sleep(timeout = 0) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, timeout)
  );
}

async function main() {
  let ip = '';
  while (!ip) {
    try {
      ip = await getListenIp();
      console.info(
        'interface is up, starting forwarder\n' +
          `(${ip}:${ports[0]} -> 127.0.0.1:${ports[1]})\npress ctrl+c to exit`
      );
    } catch (err) {
      console.info('interface is down, nothing to do');
      await sleep(sleepSecs * 1000);
    }
  }
  if (ip) {
    doForward(ip);
  }
}

main().catch((err) => console.error(err));
