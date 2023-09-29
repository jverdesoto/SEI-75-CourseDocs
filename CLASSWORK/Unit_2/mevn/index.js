import 'dotenv/config'
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dogs from "./data/dogs.js";
import { Octokit } from "octokit"
import mongoose from 'mongoose'

// const dogs = require('./data/dogs.js')

// const token = process.env.GITHUB_TOKEN
const ROOT_URL = 'https://api.github.com';
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

const app = express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.DATABASE_URL)
const Cat = mongoose.model('Cat', { name: String, age: Number }); // It is good to be consistent and use cat for both instances as the modal and the collection

app.get('/', (req, res) => {

    const kitty = new Cat({ name: 'Troy', age: 10 });
    kitty.save()
    .then(() => {
        res.json({
            message: 'Kitty has been saved'
        })
    } )
})

app.get('/cats', async (req, res) => {
    const cats = await Cat.find({})
    res.json(cats)
})


app.get('/user/:user', async (req, res) => {
    const username = req.params.user
    const data = await octokit.request(`GET /users/${username}`)
    console.log(data);
    res.json(data)
})
app.get('/repo/:user/:reponame', async (req, res) => {
    const username = req.params.user
    const reponame = req.params.reponame
    const data = await octokit.request(`GET /repos/${username}/${reponame}`, {
        owner: username,
        repo: reponame,
        headers: {
            'X-GitHub-API-Version': '2022-11-28'
        }
    })
    res.json(data)
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

app.get('/dogs', (req, res) => {
    res.json(dogs)
})



// app.get('/dogs/:id', (req, res) => {
//     console.log(req.params);
//     const index = req.params.id - 1
//     const eachDog = dogs[index]
//     res.json(eachDog)
// })

app.get('/dogs/:id', (req, res)=> {
    const id = parseInt(req.params.id)
    const dog = dogs.find(dog => {
        return dog.id === id
    })
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
