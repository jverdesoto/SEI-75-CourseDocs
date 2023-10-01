import 'dotenv/config'
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dogs from "./data/dogs.js";
import mongoose from "mongoose";

const token = process.env.GITHUB_ACCESS_TOKEN;
const ROOT_URL  = 'https://docs.github.com/en/rest?apiVersion=2022-11-28'
const app = express()
// console.log(process.env.DATABASE_URL);
app.use(cors())
app.use(bodyParser.json())

// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello MEVN env!'
//     })
// })

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

app.get('/dogs', (req, res) => {
    res.json(dogs) 
})

app.get('/dogs/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const dog = dogs.find(dog => (
        dog.id === id
    ))
    res.json(dog)
})
// app.get('/dogs', (req, res) => {
//     res.json(dogs)
// })
app.get('/cat-facts', (req, res) => {
    fetch('https://cat-fact.herokuapp.com/facts')
            .then((response) => response.json())
            .then(data => {
               res.json(data);
            })
})

// app.get('/',  (req, res) => {
//     fetch(`${ROOT_URL}/users/${username}?access_token=${token}`)
//             .then((response) => response.json())
//             .then(data => {
//                res.json(data);
//             })
// })
mongoose.connect(process.env.DATABASE_URL)
const Cat = mongoose.model('Cat', { name: String, age: Number });
app.get('/', (req, res) =>{
  
    const kitty = new Cat({ name: 'nooj', age: 10 });
    kitty.save()
    .then(() => {
        res.json({
            message : 'kitty has been saved'
        })
    });
    
})







