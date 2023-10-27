import "dotenv/config"
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dogs from "./data/dogs.js";
import mongoose from "mongoose"

const app = express()
app.use(cors())
app.use(bodyParser.json())
const Cat = mongoose.model('Cat', { name: String, age: Number });
mongoose.connect(process.env.DATABASE_URL)

app.get('/', (req, res) => {
    
   
})

const port = process.env.PORT || 4002

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

app.get('/dogs', (req, res) => {
    res.json(dogs)
})


app.get('/dogs/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const dog = dogs.find(dog => {
        return dog.id === id
    })
    res.json(dog)
})

app.get('/cats/facts', async (req, res) => {
    const API_URL = "https://cat-fact.herokuapp.com/facts"
    let catFacts = null
    await fetch(API_URL)
        .then(res => res.json())
        .then(result => {
            catFacts = result
        })
    res.json(catFacts)
})

app.post('/cat/add', (req, res) => {
    const cat = req.body
    const kitty = new Cat({name: cat.name, age: parseInt(cat.age)})
    kitty.save()
    .then(()=>{
        console.log(`New cat ${cat.name} age: ${cat.age} was added`);
        res.sendStatus(200)
    })
    .catch(error => {
        console.error(error)
        res.sendStatus(error)
    })
})

