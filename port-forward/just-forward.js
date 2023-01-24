const net = require('net');
const ports = [80, 3389];
const listenInterface = '0.0.0.0';
const server = net
  .createServer(function (from) {
    const to = net.createConnection({ host: '127.0.0.1', port: ports[1] });
    from.pipe(to).on('error', (err) => console.log('from error', err.code));
    to.pipe(from).on('error', (err) => console.log('to error', err.code));
  })
  .listen(ports[0], listenInterface);
console.log(`Listening on ${listenInterface}:${ports[0]}`);
