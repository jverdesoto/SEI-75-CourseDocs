import express, { response } from "express";
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

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

app.get('/dogs', (req, res) => {
    res.json(dogs)
})

app.get('/dogs/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const dog = dogs.find(dog => (
        dog.id === id
    ))
    res.json(dog)
})
app.get('/cat', async (req, res) => {

    const API_URL = "https://cat-fact.herokuapp.com/facts"

    let catFacts = null
    await fetch(API_URL)
        .then(res => res.json())
        .then(result => {
            catFacts = result
        })
    console.log(catFacts)
    res.json(catFacts)

})




