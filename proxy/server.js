const express = require('express');
const axios = require('axios');
const path = require('path');
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/products/:id', (req, res) => {
  axios.get(`http:13.58.45.58:1337/products/${ req.params.id }`)
  .then(items => res.status(200).send(items.data))
  .catch(() => console.log('ERROR IN PROXY SERVER /API/ITEMS/:id'));
});

app.get('/related/:id', (req, res) => {
  axios.get(`http://13.58.45.58:1337/api/related/${ req.params.id }`)
  .then(relatedItems => res.status(200).send(relatedItems.data))
  .catch(() => console.log('ERROR IN PROXY SERVER /API/RELATED/:id'));
});

app.get('/frequent/:id', (req, res) => {
  axios.get(`http://13.58.45.58:1337/api/frequent/${ req.params.id }`)
  .then(frequentlyTogether => res.status(200).send(frequentlyTogether.data))
  .catch(() => console.log('ERROR IN PROXY SERVER /API/FREQUENT/:id'));
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`listening on port ${port}`);
});