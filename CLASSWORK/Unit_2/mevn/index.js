import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { getAll, getDog } from "./data/dogs.js";
import dotenv from "dotenv";
dotenv.config();

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

mongoose.connect(`${process.env.DATABASE_URL}`);
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

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
