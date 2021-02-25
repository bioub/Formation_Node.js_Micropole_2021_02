// const { createServer } = require('http');

// const server = createServer((req, res) => {
//   switch (req.url) {
//     case '/':
//       res.setHeader('Content-type', 'text/plain');
//       res.write('Hello !');
//       break;
//     default:
//       res.statusCode = 404;
//       res.setHeader('Content-type', 'text/plain');
//       res.write('Not found');
//   }

//   res.end();
// });

// server.on('error', (err) => {
//   console.log(err.message);
// });

// server.listen(8080, () => {
//   console.log('server started');
// });
const express = require('express');


const app = express();

// app.use(express.json()); // parser le body en JSON de toutes les requêtes

app.get('/', (req, res) => {
  res.setHeader('Content-type', 'text/plain');
  res.write('Hello !');
  res.end();
});

app.get('/intro.html', (req, res) => {
  res.send('<h2>Hello !</h2>');
});

app.get('/redirect', (req, res) => {
  res.redirect('/');
});

app.get('/api/me', (req, res) => {
  res.json({
    username: 'romain',
  });
});

app.get('/api/hello/:name', (req, res) => {
  res.json({
    username: req.params.name || 'romain',
  });
});

app.get('/api/users', (req, res) => {
  res.json({
    users: [],
    page: req.query.page || 1,
  });
});

app.post('/register', express.json(), (req, res) => {
  console.log(req.body);
});

// app.use((req, res) => {
//   switch (req.url) {
//     case '/':
//       res.setHeader('Content-type', 'text/plain');
//       res.write('Hello !');
//       break;
//     default:
//       res.statusCode = 404;
//       res.setHeader('Content-type', 'text/plain');
//       res.write('Not found');
//   }

//   res.end();
// });

app.listen(8080, () => {
  console.log('server started');
});
