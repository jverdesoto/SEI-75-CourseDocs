import express, { response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dogs from "./data/dogs.js";
import { Octokit } from "octokit"
import mongoose from "mongoose";
import 'dotenv/config'




const app = express()
const token = process.env.GITHUB_TOKEN

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(`${process.env.DATABASE_URL}`);
const Cat = mongoose.model('Cat', {name: String, age: Number })

app.get('/', (req, res) => {
    const Kitty = new Cat({name: 'Beans', age: 8} )
    Kitty.save()
        .then(() => {
            res.json({
                message: 'Kitty has been bad'
            })
        })
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

app.get('/dogs', (req, res) => {
    res.json( dogs )
})

app.get('/dogs/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const dog = dogs.find(dog => {
        return dog.id === id
    })
    res.json(dog)
} )

app.get('/cat-facts', async(req, res) => {
    try {
        const api = 'https://cat-fact.herokuapp.com/facts'
        const fetchedData = await fetch(api)
        const catData = await fetchedData.json()
        res.json( catData )
    } catch (error) {
        console.log('error')
    }
})


app.get('/user/:user', async(req, res) => {
    const user = req.params.user
    const octokit = new Octokit({
        auth: token
      });
      const result = await octokit.request("GET /repos/{owner}/{repo}", {
        owner: user
      });
    res.json(result.data)
})


app.get('/repo/:user/:reponame', async(req, res) => {
    const user = req.params.user
    const repoName = req.params.reponame
    const octokit = new Octokit({
        auth: token
      });
      const result = await octokit.request("GET /repos/{owner}/{repo}", {
        owner: user,
        repo: repoName,
      });
    res.json(result.data)
})

app.get('/cats', async(req,res) => {
    const cats = await Cat.find({})
    res.json(cats)
})
