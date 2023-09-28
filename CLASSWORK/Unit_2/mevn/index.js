import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { getAll, getDog } from "./data/dogs.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello MEVN env!",
  });
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
