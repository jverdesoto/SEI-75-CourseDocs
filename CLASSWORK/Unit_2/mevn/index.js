import 'dotenv/config';
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_URL);

const AuthorSchema = new mongoose.Schema({
  name: String,
});
const Author = mongoose.model('Author', AuthorSchema);

const BookSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  },
  date: Number
});
BookSchema.index({ title: 1, author: 1 });
const Book = mongoose.model('Book', BookSchema)


const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
}); 

app.get('/library', async (req, res) => {
  try {
    const data = await Book.find({}).populate('author').exec();
    
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while fetching data from MongoDB.');
  }
});

app.get('/library/authors', async (req, res) => {
  const authors = await Author.find();
  const booksByAuthor = await Promise.all(authors.map(async (author) => {
    const books = await Book.find({ author: author._id });
    return { ...author.toJSON(), books };
  }));

  res.json(booksByAuthor)
});
app.get('/library/:id', async (req, res) => {
  const book = await Book.findById(req.params.id).populate('author').exec()
  res.json(book)
});

app.delete('/library/:id', async (req, res) => {
  Book.deleteOne({'_id': req.params.id})
  .then(() => {
    res.json({message: 'Deleted'})
  })
  .catch(error => {
    res.sendStatus(500)
  })
});

app.put('/library/:id', async (req, res) => {
  Book.updateOne({'_id': req.params.id}, { title: req.body.title, date: parseInt(req.body.date)})
  .then(() => {
    res.sendStatus(200)
  })
  .catch(erros => {
    res.sendStatus(500)
  })
});

app.post('/library', async (req, res) => {
  const bookData = req.body;
  const parsedDate = parseInt(bookData.date);

  if (!isNaN(parsedDate)) {
    try {
      const author = bookData.author; 

      const authorDocument = await Author.findOne({ name: author });

      if (!authorDocument) {
        const newAuthor = new Author({ name: author });
        authorDocument = await newAuthor.save();
      }

      const newBook = new Book({
        title: bookData.title,
        author: authorDocument._id, 
        date: parsedDate,
      });

      await newBook.save();

      console.log(`New book: ${bookData.title} with author ${author} was added to the library`);
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  } else {
    res.status(400).send('Invalid date value. Please provide a valid number for the date.');
  }
});



