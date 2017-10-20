const express = require('express');
const serveStatic = require('serve-static');

const PORT = process.env.PORT || 3001;
const server = express();

server.use(serveStatic('client/build'));

server.get('/data', (req, res) => {
  res.json({
    hello: 'world'
  });
});

server.listen(PORT, () => console.log(`started on port ${PORT}`));
