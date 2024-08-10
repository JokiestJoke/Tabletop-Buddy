import express from 'express'
import app from './app.js';

//const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

   app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
