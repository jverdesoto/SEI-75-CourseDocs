import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dogs from "./data/dogs.js";
// import axios from 'axios';

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
    res.json( dogs )
})


// app.get('/cat-facts', async (req, res) => {
//     try {
//         const response = await axios.get('http://cat-fact.herokuapp.com/facts');
//         res.json(response.data);
//     } catch (error) {
//         res.status(500).send('Error fetching cat facts.');
//     }
// });

app.get('/cat-facts', (req, res) => {
    fetch('http://cat-fact.herokuapp.com/facts')
    .then((response) => response.json())
    .then(data => {
        res.json(data);
    })
})

/// the below is how you get just one dog based on its ID

app.get('/dogs/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const dog = dogs.find(dog => {
        return dog.id === id
    })
    res.json(dog)
})