//all the things you need to import, including database stuff
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dogs from "./data/dogs.js";

//start your app
const app = express()

//tell your app dependencies you want to use
app.use(cors())
app.use(bodyParser.json())

//link it to the root page
app.get('/', (req, res) => {
    res.json({
        message: 'Hello MEVN env!'
    })
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

app.get('/cat-facts', async (request, response) => {
    const API_URL = "https://cat-fact.herokuapp.com/facts"

    let catFacts = null
    await fetch(API_URL)
        .then(response => response.json())
        .then(result => {
            catFacts = result
        })
    response.json(catFacts)
})


