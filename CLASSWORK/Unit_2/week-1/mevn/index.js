import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dogs from './data/dogs.js'
import fetch from 'node-fetch'


const app = express()
//*APP SETTINGS
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({
        message: 'Hello MEVN environment!'
    })
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listenting on port: ${port}`);
})

app.get('/cat-facts', (req, res) => {
    fetch('https://cat-fact.herokuapp.com/facts')
    .then(response => response.json()
    )
    .then(result => {
        // const randomPick = Math.floor(Math.random() * result.length)
        res.json(result)
    })
})
app.get('/dogs', (req, res) =>{
    res.json(dogs)
})

app.get('/dogs/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const dog = dogs.find(dog => {
       return dog.id === id
    })
    res.json(dog)
})