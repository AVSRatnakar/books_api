const express = require('express');
const router = express.Router();
const books = require('./books.json');

// Get all the books
router.get('/', (req, res) => {
  res.json(books);
});

// Get a specific book
router.get('/:title', (req, res) => {
  const { title } = req.params;
  res.json(books.filter((ele) => ele.title === title));
});

router.post('/', (req, res) => {
  const body = req.body;
  console.log(body);
  books.push(body);
  res.json({ message: 'The book has been added' });
});

router.put('/:title', (req, res) => {
  const { title } = req.params;
  const body = req.body;
  books.forEach((book, title) => {
    if (book.title === title) {
      books[title] = body;
    }
  });
  res.json({ message: `The book with title ${title} has been updated` });
  // res.json(books);
});

router.delete('/:title', (req,res)=>{
    const title =  req.params.tile;
    const body = req.body;
    books.forEach((books,title) => {
        if(books.title === title){
            books.splice(title);
        }
    });
    res.send(`Books with ${title} has been deleted.`);
})

module.exports = router;