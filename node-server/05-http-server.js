const { createServer } = require('http');

const server = createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.setHeader('Content-type', 'text/plain');
      res.write('Hello !');
      break;
    default:
      res.statusCode = 404;
      res.setHeader('Content-type', 'text/plain');
      res.write('Not found');
  }

  res.end();
});

server.on('error', (err) => {
  console.log(err.message);
});

server.listen(8080, () => {
  console.log('server started');
});
