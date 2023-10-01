import 'dotenv/config';
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dogs from "./data/dogs.js";
import mongoose from 'mongoose';

const app = express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.DATABASE_URL);
const Cat = mongoose.model('Cat', { name: String, age:Number });

app.get('/', (req, res) => {

    const kitty = new Cat({ name: 'Mittens', age: 7 })
        kitty.save()
        .then(() => {
            res.json({
                message: 'Kitty has been saved'
            })
        });
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
})

// This line sets up a route in our Express application. It's like telling our app what to do when someone visits a specific web address.
app.get('/CatFacts', (req, myCatFactsPage) => {
    // When someone goes to http://localhost:4000/CatFacts, this function will run.
    // build url
    // We're about to visit a website to get some cat facts. So, we're sending a request to that website.
    // The fetch function goes to the website and asks for information.

    fetch('http://cat-fact.herokuapp.com/facts')
    // Once the website responds, we need to understand its response. 
    // Here, we're saying that we'll treat the response like a puzzle and try to solve it.
    .then((catFactWebsiteResponse) => catFactWebsiteResponse.json())
    // Now that we've solved the puzzle, we have some cat facts in a format we can use (like pieces of a jigsaw puzzle).
    .then(catFactWebsiteJson => {
        // We take those cat facts and send them back to the person who asked for them.

        myCatFactsPage.json(catFactWebsiteJson)
        })
    })

app.get('/cats', async (req, res)=> {
    const cats= await Cat.find({});
    res.json(cats)
})

// app.get('/dogs/:id', function(req, res) {
//     const id = parseInt(req.params.id);
  
//     const dog = dogs.find(function(dog) {
//       return dog.id === id;
//     });
  
//     res.json(dog);
//   });
//   app.get('/CatFacts', function(req, res) {
//     fetch('http://cat-fact.herokuapp.com/facts')
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(result) {
//         res.json(result);
//       });
//   });



    const token = process.env.GITHUB_TOKEN // Get your GitHub API token from environment variables.
    const ROOT_URL = 'https://api.github.com'; // Define the root URL for the GitHub API.

    // Define a route in your Express application for handling user data requests.
    //get(method you are passing the file route, and then youre passing a function that sends request and response)
    // We tell our server to listen when someone says, "Tell me about a user!"
    app.get('user/:user', (req, userResponse) => {
        // Listen carefully to the name the person says.
        const username = req.params.user; // / They might say, "Tell me about SnowWhite!" Extract the username from the URL parameter.
        // Formulate a special question to GitHub about the user. HTTPS is the request to the server
        const userUrl = `${ROOT_URL}/users/${username}?access_token=${token}`; // Create the URL for the GitHub user data API.
    
        // Make an HTTP GET request to the GitHub API to fetch user data.
        //fetch(method, you pass the url)
        //Send the special question to GitHub. We use a messenger called "fetch" to do this. It's like sending a letter.
        fetch(userUrl) // We say, "Hey GitHub, tell us about SnowWhite!"
            .then(urlResponse => urlResponse.json()) // Wait for GitHub's reply and open the letter. (then you get the json out of your response)
            .then(urlResponseJson => {
                //Share GitHub's reply with the person who asked
                userResponse.json(urlResponseJson)// We tell the person, "SnowWhite is a princess!" > then you pass your response and send the json of your response back to the client
            })
    })
    

    app.get('/user/:user/repo/:reponame', (req,repoResponse) => {
        const username = req.params.user;
        const reponame = req.params.reponame;
        const repoUrl = `${ROOT_URL}/repos/${username}/${reponame}?access_token=${token}`;

        fetch(repoUrl)
            .then(urlRepoResponse => urlRepoResponse.json())
            .then(urlRepoResponseJson => {
                repoResponse.json(urlRepoResponseJson)
            })
    })