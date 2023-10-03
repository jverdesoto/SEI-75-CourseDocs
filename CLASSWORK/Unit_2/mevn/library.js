import mongoose from "mongoose";
import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_LIBRARY);

const authorSchema = new mongoose.Schema({
  name: String,
});

const bookSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
  title: String,
  date: Number
});


const Authors = mongoose.model("Authors", authorSchema);
const Books = mongoose.model("Books", bookSchema);


app.post("/AddBook", async (req, res) => {
  try {
    const data = req.body;
    let author = await Authors.findOne({ name: data.author });
    if (!author) {
      author = new Authors({
        name: data.author,
      });
      await author.save();
    }
    const book = new Books({
      author: author._id,
      title: data.title,
      date: data.date,
    });
    await book.save();
    return res.status(200).json(book);
  } catch (err) {
    console.log("ERROR MESSAGE HERE ->", err.message);
  }
});

// app.post('/AddBook', async (req, res) => {

//     const book = req.body
//     const books = new Books({title: book.title, date: parseInt(book.date), author: book.author});
//     const authors = new Authors({author: book.author, title: book.title})
//     books.save()
//     authors.save()
//     .then(() => {
//         console.log(`New book ${book.title} date ${book.date} - ${book.author}`);
//         res.sendStatus(200)
//     })
// })

app.get("/Allbooks", async (req, res) => {
  const books = await Books.find({});
  res.json(books);
});

app.get("/Allauthors", async (req, res) => {
  const authors = await Authors.find({});
  res.json(authors);
});

app.get("/AllAuthors/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const author = await Authors.findById(id);
    res.json(author);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/AllBooks/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const books = await Books.findById(id)
    console.log(books);
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
