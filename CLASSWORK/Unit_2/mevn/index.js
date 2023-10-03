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
  author: String,
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
    const data = await Book.find({}).exec();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while fetching data from MongoDB.');
  }
});

app.get('/library/authors/:author', async (req, res) => {
  const authors = await Author.find({}).exec();
    res.json(authors);
});

app.get('/library/titles/:title', async (req, res) => {
  const title = req.params.title
    const data = await Book.find({ title }).exec();
    res.json(data);
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
        await newAuthor.save();
      }

      const newBook = new Book({
        title: bookData.title,
        author: author, 
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



