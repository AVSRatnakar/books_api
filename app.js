const express = require('express');
const port = 5500;
const cors = require('cors')
const books = require('./books');

const app = express();
app.use(express.json());
// app.use(express.static('./public'))
app.use('/books', books);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});