// Importing node modules
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dogsExport from "./data/dogs.js"

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({
        message: 'Hello MEVN env!'
    })
})

// Change default port to 4000 (unless otherwise specified)
const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})

app.get('/dogs', (req, res) => {
    res.json(dogsExport.dogs)
})

app.get('/dogs/:id', (req, res) => {
    const dog = dogsExport.dogs.filter(dog => dog.id === parseInt(req.params.id))
    res.json(dog)
  });