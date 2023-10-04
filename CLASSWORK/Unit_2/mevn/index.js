import 'dotenv/config.js'
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dogs from "./data/dogs.js";
import mongoose from "mongoose";

const app = express()

app.use(cors())
app.use(bodyParser.json())

    mongoose.connect(`${process.env.DATABASE_URL}`)
    const Cat = mongoose.model('Cat', { name: String, age: Number });
app.get('/', (req, res) => {

    const kitty = new Cat({ name: 'Tiddles', age: 9})
    kitty.save()
    .then(() => {
        res.json({
            message: 'Kitty has been saved'
    })
  })
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

app.get('/dogs', (req, res) => {
    res.json( dogs )
})

app.get('/dogs/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const dog = dogs.find(dog => (
        dog.id === id
    ))
    res.json(dog)
})

app.get('/catfacts', (req, res) => {
    
})

app.get('/cats', async (req, res) => {
    const cats= await Cat.find({});
    res.json(cats)
})

app.post('/cats/add', (req, res) => {
    const cat = req.body
    const kitty = new Cat({name: cat.name, age: parseInt(cat.age)}) // backend sending it to the DB
    kitty.save()
    .then(()=>{
        console.log(`New cat ${cat.name} age: ${cat.age} was added`);
        res.sendStatus(200)
    })
    .catch(error => {
        console.error(error)
        res.sendStatus(error)
    })
})

// send data to db to use
mongoose.connect(`${process.env.DATABASE_URL}`)
const authorSchema = new mongoose.Schema({
    name: String,
  })
  
  const bookSchema = new mongoose.Schema({ //author = object id
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author'
    },
    title: String,
    year: Number
  })
  
  const Author = mongoose.model('Author', authorSchema) 
  const Book = mongoose.model('Book', bookSchema)
  
  
  app.post('/add/books', async (req, res) => {
    try {
      const data = req.body
  
      let author = await Author.findOne({ name: data.author })
      if (!author) {
        author = new Author({ // if author doesnt exist, make a new one
          name: data.author
        })
        await author.save()
      }
  
      const book = new Book({
        author: author._id,
        title: data.title,
        year: data.year
      })
      await book.save()
      return res.status(200).json(book)
    } catch (err) {
      console.log(err)
    }
  })

  app.get('/authors', async (req, res) => {
    const authors= await Author.find({});
    res.status(200).json(authors)
})

  app.get('/books', async (req, res) => {
    const books= await Book.find({});
    res.status(200).json(books)
  })

  app.get('/authors/:id', async (req, res) => {
    const authorId = req.params.id;
    const author = await Author.findById(authorId);
    res.json(author);
  })

  app.get('/authors/:id/books', async (req, res) => {
    const authorId = req.params.id;
    const author = await Author.findById(authorId);
    const booksByAuthor = await Book.find({ author: author.id }).select('title year');
    res.json({ author, booksByAuthor });
  })

  app.get('/books/:id', async (req, res) => {
    const bookId = req.params.id;
    const book = await Book.findById(bookId).populate('author');
    console.log(book);
    res.json({
      title: book.title,
      author: book.author,
      year: book.year,
    });
  })