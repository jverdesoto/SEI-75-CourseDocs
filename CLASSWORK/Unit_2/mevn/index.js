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

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

app.get('/dogs', (req, res) => {
    res.json( dogs )
})
