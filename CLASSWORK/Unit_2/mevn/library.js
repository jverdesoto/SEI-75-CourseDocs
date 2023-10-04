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
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
  title: String,
  date: Number,
});
const authorSchema = new mongoose.Schema({
  name: String,
  books: [bookSchema],
});
const Books = mongoose.model("Book", bookSchema);
const Authors = mongoose.model("Authors", authorSchema);

app.post("/AddBook", async (req, res) => {
  try {
    const data = req.body;
    let author = await Authors.findOne({ name: data.author });
    if (!author) {
      author = new Authors({
        name: data.author,
        books: [{ title: data.title, date: data.date }],
      });
      await author.save();
    } else {
      author.books.push({ title: data.title, date: data.date });
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
    res.status(500).json({ error: "Internal Server Error" });
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

// app.get("/AllAuthors/:id", async (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   try {
//     const author = await Authors.findById(id);
//     console.log(author);
//     if (author) {
//       res.json(author);
//     } else {
//       res.status(404).json({ error: "Author not found" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

app.get("/AllAuthors/:id", async (req, res) => {
    const author = await Authors.findById(req.params.id)
    const books = await Books.find({"author": req.params.id})
    const result = { author, books }
    res.json(result)
})


app.get("/AllBooks/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Books.findById(id);
    console.log(book);
    if (book) {
      const author = await Authors.findById(book.author);
    //   console.log(book.author);
      res.json({ book, author });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/AllBooks/:id", async (req, res) => {
    Books.deleteOne({"_id": req.params.id})
    .then(() => {
        res.sendStatus(200)
    })
    .catch(error => {
        res.sendStatus(500)
    })
})

app.put("/AllBooks/:id", async (req, res) => {
    Books.updateOne({"_id": req.params.id}, {title: req.body.title, date: parseInt(req.body.date)})
    .then(() => {
        res.sendStatus(200)
    })
    .catch(error => {
        res.sendStatus(500)
    })
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
