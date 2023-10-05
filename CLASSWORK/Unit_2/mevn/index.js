import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { getAll, getDog } from "./data/dogs.js";
import dotenv from "dotenv";
dotenv.config();

import addBook from "./controller/libraryctrl.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

const token = process.env.GITHUB_TOKEN;
const ROOT_URL = "https://api.github.com";
const options = {
  headers: {
    Authorization: `token ${token}`,
  },
};

mongoose.connect(`${process.env.DATABASE2_URL}`);
const Cat = mongoose.model("Cat", { name: String, age: Number });

app.get("/cats", async (req, res) => {
  const cats = await Cat.find();
  res.json(cats);
});

app.post("/cats", (req, res) => {
  const { name } = req.body;
  const { age } = req.body;
  const kitty = new Cat({ name: name, age: age });
  kitty.save().then(() => {
    res.json({
      message: "Kitty has been saved",
    });
  });
});

app.delete("/cats/:id", async (req, res) => {
  console.log("delete called");
  const { id } = req.params;
  const numberId = Number(id);
  const cat = await Cat.findByIdAndDelete({ _id: numberId });
  res.json(cat);
});

app.get("/user/:user", async (req, res) => {
  const userName = req.params.user;
  const result = await fetch(`${ROOT_URL}/users/${userName}`, options).then(
    (res) => res.json()
  );
  res.json(result);
});

app.get("/repo/:user/:reponame", async (req, res) => {
  const userName = req.params.user;
  const repoName = req.params.reponame;
  const result = await fetch(
    `${ROOT_URL}/repos/${userName}/${repoName}`,
    options
  ).then((res) => res.json());
  res.json(result);
});

app.get("/dogs", (req, res) => {
  const dogList = getAll();
  res.json(dogList);
});

app.get("/dogs/:id", (req, res) => {
  const id = Number(req.params.id);
  const dog = getDog(id);
  res.json(dog);
});

app.get("/cat-facts", (req, res) => {
  fetch(`https://cat-fact.herokuapp.com/facts`)
    .then((response) => response.json())
    .then((result) => {
      res.json(result);
    });
});

//! LIBRARY
//? DB
const titleSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishingDate: Date,
});

const authorSchema = new mongoose.Schema({
  name: String,
  titles: [titleSchema],
});

const Author = mongoose.model("Author", authorSchema);

//? ROUTES
app.post("/library", async (req, res) => {
  const { title, author, published } = req.body;
  addBook(title, author, published, Author);
});

//Get all authors
app.get("/library/author", async (req, res) => {
  const authors = await Author.find();
  res.status(200).json(authors);
});

//Get all titles
app.get("/library/title", async (req, res) => {
  // const authors = await Author.find();
  // const titles = [];
  // authors.forEach((author) => {
  //   author.titles.forEach((title) => {
  //     titles.push(title.title);
  //   });
  // });
  // res.json(titles);

  const result = await Author.aggregate([
    {
      $unwind: "$titles",
    },
  ]);
  res.json(result);
});

//Get specific auth
app.get("/library/author/:name", async (req, res) => {
  const { name } = req.params;
  const author = await Author.find({ name: name });
  res.json(author[0].titles);
});

//Get specific title
app.get("/library/title/:title", async (req, res) => {
  const titleParam = req.params.title;
  // const author = await Author.find({ "titles.title": titleParam });
  // const found = author[0].titles.find((title) => {
  //   return title.title === titleParam;
  // });
  // res.json(found);

  const result = await Author.aggregate([
    {
      $unwind: "$titles",
    },
    {
      $match: { "titles.title": titleParam },
    },
  ]);
  res.json(result[0].titles);
});

//Update specific title
app.put("/library/title/update/:title", async (req, res) => {
  const bookToBeUpdated = req.params.title;
  const { title, author, published } = req.body;
  const foundAuthor = await Author.find({ "titles.title": bookToBeUpdated });
  //find specific title
  const foundTitle = foundAuthor[0].titles.find((item) => {
    return item.title === bookToBeUpdated;
  });
  console.log(foundTitle);
  // check if author is not updated
  if (foundAuthor[0].name === author) {
    //then we can update
    foundTitle.title = title;
    foundTitle.publishingDate = published;
    await foundAuthor[0].save();
    console.log("title updated");
  } else {
    //we must delete and readd
    const newArray = foundAuthor[0].titles.filter((item) => {
      return item._id !== foundTitle._id;
    });
    foundAuthor[0].titles = newArray;
    console.log(foundAuthor[0].titles);
    await foundAuthor[0].save();
    //Now we readd
    addBook(title, author, published, Author);
  }
});

//delete specific title
app.delete("/library/title/delete/:name", async (req, res) => {
  const { name } = req.params;
  console.log(name);
  const foundAuthor = await Author.find({ "titles.title": name });
  //If author has only one title, delete author
  if (foundAuthor[0].titles.length === 1) {
    await Author.deleteOne({ name: foundAuthor[0].name });
  } else {
    //find specific title
    const foundTitle = foundAuthor[0].titles.find((item) => {
      return item.title === name;
    });
    //Delete
    const newArray = foundAuthor[0].titles.filter((item) => {
      return item._id !== foundTitle._id;
    });
    foundAuthor[0].titles = newArray;
    console.log(foundAuthor[0].titles);
    await foundAuthor[0].save();
  }
  res.json({
    message: "Book deleted",
  });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
