import 'dotenv/config.js'
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dogs from "./data/dogs.js";
import mongoose from "mongoose";

const app = express()

app.use(cors())
app.use(bodyParser.json())

    mongoose.connect(`${process.env.DATABASE_URL}`)
    const Cat = mongoose.model('Cat', { name: String, age: Number });
app.get('/', (req, res) => {

    const kitty = new Cat({ name: 'Tiddles', age: 9})
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
    res.json( dogs )
})

app.get('/dogs/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const dog = dogs.find(dog => (
        dog.id === id
    ))
    res.json(dog)
})

app.get('/catfacts', (req, res) => {
    
})

app.get('/cats', async (req, res) => {
    const cats= await Cat.find({});
    res.json(cats)
})

app.post('/cats/add', (req, res) => {
    const cat = req.body
    const kitty = new Cat({name: cat.name, age: parseInt(cat.age)}) // backend sending it to the DB
    kitty.save()
    .then(()=>{
        console.log(`New cat ${cat.name} age: ${cat.age} was added`);
        res.sendStatus(200)
    })
    .catch(error => {
        console.error(error)
        res.sendStatus(error)
    })
})

// send data to db to use
mongoose.connect(`${process.env.DATABASE_URL}`)
    const Book = mongoose.model('Book', { title: String, author: String, year: Number }, 'books');
    app.post('/add/books', (req, res) => {
    const book = req.body
    const novel = new Book({title: book.title, author: parseInt(book.author)})
    novel.save()
    .then(() => {
        console.log(`New book ${book.title} author: ${book.author} was added`);
        res.sendStatus(200)
  })
    .catch(error => {
        console.error(error)
        res.sendStatus(error)
    })  
})