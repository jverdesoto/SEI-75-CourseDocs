import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dogs from "./data/dogs.js";


const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({
        message: 'Hello MEVN env!'
    })
})

app.get('/dogs/:id', (req, res) => {
    const dogId = parseInt(req.params.id, 10);
    const dog = dogs.find(d => d.id === dogId);
  
    if (dog) {
      res.json(dog);
    } else {
      res.status(404).json({ message: 'Dog not found' });
    }
  });
  
const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

app.get('/dogs', (req, res) => {
    res.json( dogs )
})