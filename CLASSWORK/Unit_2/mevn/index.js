import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dogs from "./data/dogs.js";
import { Octokit } from "octokit";
import mongoose from "mongoose";
import 'dotenv/config';


const app = express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(`${process.env.DATABASE_URL}`)
const Cat = mongoose.model('Cat', { name: String, age:Number });

app.get('/', (req, res) => {

    const kitty = new Cat({ name: 'Troy', age: 10 });

    kitty.save()
    .then(() => {
        res.json({
            message: 'Kitty has been saved'
    })
})
})

app.get('/get-cats', async (req, res) => {
    const cats = await Cat.find({});
        res.json(cats); 
    });

// Add a new POST endpoint to handle the form data
app.post('/add-cat', (req, res) => {
    const cat = req.body;  // Get the cat data from the request body

    const kitty = new Cat({ name: cat.name, age: parseInt(cat.age) });

    kitty.save()
    
    .then(() => {
        console.log(`New cat ${cat.name} age: ${cat.age} was added`);
        res.sendStatus(200)
        })
    .catch(error => {
        console.error(error);
        res.sendStatus(error);
        })
    })

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

app.get('/dogs', (req, res) => {
    res.json( dogs )
})

app.get('/cat-facts', (req, res) => {
    fetch('http://cat-fact.herokuapp.com/facts')
    .then((response) => response.json())
    .then(data => {
        res.json(data);
    })
})

/// the below is how you get just one dog based on its ID

app.get('/dogs/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const dog = dogs.find(dog => {
        return dog.id === id
    })
    res.json(dog)
})

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  })
  
  app.get('/user/:user', async (request, response) => {
    const user = request.params.user
    const data = await octokit.request(`GET /users/${user}`)
    response.json(data);
  })

//   app.get('/repo/:user', async (request, response) => {
//     const repo = request.params.repo
//     const data = await octokit.request(`GET /users/${user}`)
//     response.json(data);
//   })


// -------------------
//!BOOK DATABASE

// Connecting to MongoDB
mongoose.connect(`${process.env.DATABASE_URL}`)

// Creating my Book Model
const Book = mongoose.model('Book', {
    title: String, 
    author: String, 
    date: String
});

// Creating my Author Model
const Author = mongoose.model('Author', {
    name: String
  });  

app.get('/', (req, res) => {

    const Library = new Book({ title: 'Child 44', author: 'Tom Rob Smith', date: 20231007 });

    Library.save()
    .then(() => {
        res.json({
            message: 'Book has been saved'
    })
})
})

app.get('/get-books', async (req, res) => {
    const books = await Book.find({});
        res.json(books); 
    });

//  Posting Book Route
app.post('/add-book', async (req, res) => {
    const book = req.body;  

    let existingAuthor = await Author.findOne({ name: book.author });

    if (!existingAuthor) {
        const newAuthor = new Author({ name: book.author });
        try {
            await newAuthor.save();
        } catch (error) {
            console.error("Error adding new author:", error);
            return res.status(500).send('Error adding new author');
        }
    }

    const Library = new Book({ title: book.title, author: book.author, date: parseInt(book.date) });

    Library.save()
    
    .then(() => {
        console.log(`New book ${book.title} author: ${book.author} date: ${book.date} was added`);
        res.sendStatus(200)
        })
    .catch(error => {
        console.error("Error adding new book:", error);
        res.status(500).send('Error adding new book');
        })
    })

// Other Routes
app.get('/authors', async (req, res) => {
    const authors = await Author.find();
    res.json(authors);
  });
    
app.get('/titles', async (req, res) => {
    const books = await Book.find({}, 'title'); 
    res.json(books);
    });
    
    app.get('/authors/:name', async (req, res) => {
        try {
            const books = await Book.find({ author: req.params.name });
            res.json({ authorName: req.params.name, books });
        } catch (error) {
            console.error("Error fetching books:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
    
    
app.get('/titles/:title', async (req, res) => {
    
    console.log('Searching for book with title:', req.params.title);
    const book = await Book.findOne({ title: req.params.title });

    if (!book) {
        console.log('No book found for title:', req.params.title);
        return res.status(404).send('Book not found');
    }
    console.log(book._id);
    res.json(book);
    });

    app.delete('/titles/:title', async (req, res) => {
        try {
            await Book.deleteOne({"title": req.params.title})
            res.status(200).send('Book deleted');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    });

    app.put('/book/:id', async (req, res) => {
        try {
          await Book.updateOne({_id: req.params.id}, req.body);
          res.status(200).send('Book updated');
        } catch (error) {
          console.error("Error updating the book:", error);
          res.status(500).send('Internal Server Error');
        }
      });

