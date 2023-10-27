import mongoose from "mongoose";
import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(process.env.DATABASE_LIBRARY);

const bookSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
  title: String,
  date: Number
});

const authorSchema = new mongoose.Schema({
  name: String,
  books: [bookSchema]
});

const userSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  },
  lastLogin: {
    type: Date,
    required: true
  }
})

const Book = mongoose.model('Book', bookSchema);
const Author = mongoose.model('Author', authorSchema);
const User = mongoose.model('User' , userSchema) 

app.post("/AddBook", async (req, res) => {
  try {
    const data = req.body;
    let author = await Author.findOne({ name: data.author });
    if (!author) {
      author = new Author({
        name: data.author,
        books: [{ title: data.title, date: data.date }]
      });
      await author.save();
    } else {
      author.books.push({ title: data.title, date: data.date, id: data._id});
      await author.save();
    }
    const book = new Book({
      author: author._id,
      title: data.title,
      date: data.date
    });
    await book.save();
    return res.status(200).json(book);
  } catch (err) {
    console.log("ERROR MESSAGE HERE ->", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get('/Allbooks', async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get('/Authors', async (req, res) => {
  try {
    const authors = await Author.find({});
    res.json(authors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete('/Book/:id', async (req, res) => {
    Book.deleteOne({"_id": req.params.id})
    .then(() => {
        res.json({message: 'Deleted'})
    })
    .catch(error => {
        res.sendStatus(500)
    })
})

app.put('/EditBook/:id', async (req, res) => {
    console.log('EDITING BOOK');
    Book.updateOne({"_id": req.params.id},{
        title: req.body.title,
        date: parseInt(req.body.date)
    })
    .then(() => {
        res.sendStatus(200)
    })
    .catch(error => {
        res.status(500)
    })
    
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

app.get("/Author/:id", async (req, res) => {
  const author = await Author.findById(req.params.id)
  const books = await Book.find({"author": req.params.id})
  const result = {author, books}
  res.json(result)
});

app.get("/Book/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id);
    if (book) {
      const author = await Author.findById(book.author);
      console.log(book.author);
      res.json({ book, author });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/user/login", async (req, res) => {
  const now = new Date()
  if (await User.count({"userEmail": req.body.email}) === 0) {
    const newuser = new User({userEmail: req.body.email, lastLogin: now})
    newuser.save()
    .then(() => {
      res.sendStatus(200)
    })
  } else {
    await User.findOneAndUpdate({"userEmail": req.body.email}, {lastLogin: now})
    res.sendStatus(200)
  }
})





