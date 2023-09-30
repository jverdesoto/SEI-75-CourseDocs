//all the things you need to import, including database stuff
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Octokit } from "octokit";
import dogs from "./data/dogs.js";
import mongoose from "mongoose";
import 'dotenv/config'


//start your app
const app = express()

//tell your app dependencies you want to use
app.use(cors())
app.use(bodyParser.json())

//connect to the database
mongoose.connect(process.env.DATABASE_URL);

//create a new model (create a class to store the data)
const Cat = mongoose.model('Cat', {
    name: String,
    age: Number
})

//link it to the root page
app.get('/', (req, res) => {
    
    //create a new entry to the cats database
    const kitty = new Cat({
        name: 'Meg',
        age: 18
    })

    //save the data bit - go read about mongoose and what you can do with it
    kitty.save()
        .then(() => {
            res.json({
                message: 'Kitty has been saved'
            })
        })
})

app.post('/cats', (request, response) =>{
    console.log(request.body)
    console.log(request.method)
    const catData = request.body
    console.log(catData)
    response.json(catData)
    
})



//because there are two servers running at once, tell it which one you want 
const port = process.env.PORT || 4000

//start listening to the port
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

//mount the route to any pages you want to display
app.get('/dogs', (req, res) => {
    res.json(dogs)
})

app.get('/dogs/:id', (request, response) => {
    //get the id parameter from the URL
    //make sure to pass it as an number because URLS are always strings, and our id is a number
    const id = parseInt(request.params.id)

    //find the dog with the id we are looking for 
    const dog = dogs.find(dog => (dog.id === id))

    //set the response of this request as a JSON response
    response.json(dog)
})

//!one way of fetching cat data (because for some reason I was trying to call the response outside of the fetch)
// app.get('/cat-facts', async (request, response) => {
//     const API_URL = "https://cat-fact.herokuapp.com/facts"

//     // let catFacts = null
//     await fetch(API_URL)
//         .then(response => response.json())
//         .then(result => {
//             catFacts = result
//         })
//     response.json(catFacts)
// })

//!other simpler way of fetching
app.get('/cat-facts', (request, response) => {
    fetch('https://cat-fact.herokuapp.com/facts')
        .then(response => response.json())
        .then(result => {
            response.json(result)
        })
})


//* CONNECTING TO GITHUB API EXERCISE
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})


app.get('/user/:user', async (request, response) => {
    const user = request.params.user
    const data = await octokit.request(`GET /users/${user}`, {
        owner: user
    })
    response.json(data)
})

app.get('/repos/:user/:reponame', async (request, response) => {
    const user = request.params.user
    const reponame = request.params.reponame

    const data = await octokit.request(`GET /repos/${user}/${reponame}`)
    response.json(data)
})

app.get('/cats', async(request, response) =>{
 const allCats = await Cat.find({})
 response.json(allCats)
})
