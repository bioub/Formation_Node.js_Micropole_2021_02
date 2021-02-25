const { createServer } = require('net');

const server = createServer((socket) => {
  socket.pipe(process.stdout);

  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-type: text/plain\r\n');
  socket.write('\r\n');
  socket.write('Hello !\r\n');
  socket.write('\r\n');
  socket.end();
});

// server.on('connection', (socket) => {
//   socket.pipe(process.stdout);

//   socket.write('HTTP/1.1 200 OK\r\n');
//   socket.write('Content-type: text/plain\r\n');
//   socket.write('\r\n');
//   socket.write('Hello !\r\n');
//   socket.write('\r\n');
//   socket.end();
// });

server.on('error', (err) => {
  console.log(err.message);
});

// server.on('listening', () => {
//   console.log('server started');
// })


server.listen(8080, () => {
  console.log('server started');
});
