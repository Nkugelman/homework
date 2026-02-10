import express from 'express';
import parseNumbers from './parseNumbers.js';
const app = express();
app.get('/add', parseNumbers, (req, res) => {
  const sum = req.a + req.b;       
  res.send(`Result: ${sum}`);
});

app.get('/substract', parseNumbers, (req, res) => {
  const sum = req.a - req.b;       
  res.send(`Result: ${sum}`);
});
app.listen(3000)