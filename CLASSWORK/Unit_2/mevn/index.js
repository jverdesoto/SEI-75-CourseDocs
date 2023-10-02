import 'dotenv/config';
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_URL);

const Book = mongoose.model('Book', {
  Title: String,
  Author: String,
  Date: Number
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.get('/', async (req, res) => {
    try {
      const data = await Book.find({}).exec();
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).send('An error occurred while fetching data from MongoDB.');
    }
  });

app.post('/library', (req, res) => {
  const book = req.body;
  const livro = new Book({ Title: book.Title, Author: book.Author, Date: parseInt(book.Date) });
  livro.save()
    .then(() => {
      console.log(`New book: ${book.Title} from ${book.Author} was added to the library`);
      res.sendStatus(200);
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);  
    });
});
