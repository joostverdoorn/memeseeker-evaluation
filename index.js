require('dotenv').config()

const express = require('express');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser')
const shuffle = require('array-shuffle');
const MongoClient = require('mongodb').MongoClient;

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3001;

MongoClient.connect(MONGODB_URI).then(db => {

  const server = express();

  server.get('/data/:field', async (request, response) => {
    const { field } = request.params;

    const result = await db.collection('fields').findOne({ field });
    if (!result) return response.status(404).end();

    const { memes } = result;
    response.json(shuffle(memes));
  });

  server.post('/data/:field', bodyParser.json(), (request, response) => {
    const { field } = request.params;
    const relevancies = request.body;

    db.collection('responses').insertOne({ field, relevancies, date: new Date() });
    response.json({ thanks: 'buddy' });
  });

  server.use(serveStatic('client/build'));

  server.listen(PORT, () => console.log(`started on port ${PORT}`));
});
