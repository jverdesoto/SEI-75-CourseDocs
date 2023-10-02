// Importing node modules
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dogsExport from "./data/dogs.js"
import { Octokit, App } from "octokit"
import mongoose from "mongoose"
import 'dotenv/config'

const app = express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.DATABASE_URL)
const Cat = mongoose.model('Cat', { name: String, age: Number })

app.get('/', (req, res) => {
    // const kitty = new Cat({ name: 'Troy', age: 10 })
    // kitty.save()
    res.json({
        message: 'All cats go'
    })
})

app.get('/cats', async (req, res) => {
    const cat = await Cat.find()
    res.json(cat)
})

// app.get('/cats/:name', async (req, res) => {
//     const name = req.params.name
//     const cat = await Cat.find({ name: `${name}`}).exec()
//     res.json(cat)
// })

// app.get('/cats/age/:age', async (req, res) => {
//     const age = req.params.age
//     const cat = await Cat.find({ age: `${age}`}).exec()
//     res.json(cat)
// })

// app.get('/cats/:name/:age', (req, res) => {
//     const name = req.params.name
//     const age = req.params.age
//     const newCat = new Cat({ name: `${name}`, age: `${age}` })
//     newCat.save()
//     res.json({
//         message: `${name}, ${age} saved`
//     })
// })

app.post('/cats/add', (req,res) => {
    const cat = req.body
    const kitty = new Cat({ name: cat.name, age: parseInt(cat.age)})
    kitty.save()
    .then(() => {
        console.log(`New cat ${cat.name}, ${cat.age} was added`)
        res.sendStatus(200)
    })
    .catch(error => {
        console.error(error)
        res.sendStatus(error)
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
    const dog = dogsExport.dogs.find(dog => dog.id === parseInt(req.params.id))
    res.json(dog)
  })

app.get('/cat-facts', (req, res) => {
    const API_URL = 'https://cat-fact.herokuapp.com/facts'
    fetch(API_URL)
    .then(response => response.json())
    .then(allFacts => allFacts[Math.floor(Math.random() * allFacts.length)])
    .then(result => res.json(result))
})

// Octokit.js
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

app.get('/user/:user', async (req, res) => {
    const username = req.params.user
    const data = await octokit.request(`GET /users/${username}`, {
        username: username,
        headers: {
        'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    res.json(data)
})

app.get('/repo/:user/:reponame', async (req, res) => {
    const username = req.params.user
    const reponame = req.params.reponame
    const data = await octokit.request(`GET /repos/${username}/${reponame}`, {
        owner: username,
        repo: reponame,
        headers: {
        'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    res.json(data)
})