import 'dotenv/config';
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dogs from "./data/dogs.js";
import mongoose from "mongoose";


const app = express()

const token = process.env.GITHUB_TOKEN;
const ROOT_URL = 'https://api.github.com';
const options = {
    headers: {
        Authorization: `token ${token}`
    }
}


app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.DATABASE_URL)
const Cat = mongoose.model('Cat', { name: String, age: Number })

app.get('/', (req, res) => {

    const kitty = new Cat({ name: 'White Claw', age: 12 })

    kitty.save()
        .then(() => {
            res.json({
                message: 'Kitty has been saved'
            })
        })
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})


app.get('/dogs', (req, res) => {
    res.json(dogs)
})


app.get('/dogs/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const dog = dogs.find(dog => {
        return dog.id === id
    })
    res.json(dog)
})

app.get('/cat-facts', (req, res) => {
    fetch('https://cat-fact.herokuapp.com/facts')
        .then(response => response.json())
        .then(data => {
            res.json(data)
        })
})

app.get('/user/:login', (req, res) => {
    const user = req.params.login
    fetch(`https://api.github.com/users/${user}`)
        .then(response => response.json())
        .then(data => {
            res.json(data)
        })
})

app.get('/repo/:user/:reponame', (req, res) => {
    const user = req.params.login
    const reponame = req.params.login.repos_url
    fetch(`https://api.github.com/users/${user}/${reponame}`)
        .then(response => response.json())
        .then(data => {
            res.json(data)
        })
})

app.get('/cats', async (req, res) => {
    try {
        const cats = await Cat.find({}).exec();
        res.json(cats);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/kitty-cats', (req, res) => {
    const cat = req.body
    const kitty = new Cat({ name: cat.name, age: parseInt(cat.age) })
    kitty.save()
        .then(() => {
            console.log((`New cat ${cat.name} age: ${cat.age} was added`))
            res.sendStatus(200)
        })
        .catch(error => {
            console.error(error)
            res.sendStatus(error)
        })
})
