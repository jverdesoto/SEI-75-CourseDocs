import 'dotenv/config'
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
// import dogs from './data/dogs.js'
// import CatFacts from CatFacts
import mongoose, { Schema } from "mongoose"

const app = express()

app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})


app.get('/', async (req, res) => {
  try {
   res.json({
      message: 'Hello'
     })
  }
 catch (error) {
  console.error(error)
   res.status(500).json({error: 'Page not loading'})
  } })

mongoose.connect(`${process.env.DATABASE_URL}`)

const userSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  },
  lastLogin: {
    type: Date,
    required: true
  }
})
const User = mongoose.model('user', userSchema)

const authorSchema = new mongoose.Schema({
  name: String,
})

const bookSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
  },
  publishingDate: Number,
})

const Author = mongoose.model('Author', authorSchema)
const Book = mongoose.model('Book', bookSchema)



// Front-end - back-end links
app.get('/books/list', async (request, response) => {
  try {
      const bookList = await Book.find({}).populate('author')
      response.json(bookList)
  } catch {
      console.log('error')
  }
})

app.get('/books/authors', async (request, response) => {
  try {
      const authorList = await Author.find({})
      response.json(authorList)
  }
  catch (error) {
      console.log(error)
  }
})


//add new book 
app.post('/books/add', async (request, response) => {
  try {
    // Check if book already exists in db
    const existingBook = await Book.findOne({ title: request.body.title });

    if (existingBook) {
      console.log('Book is already in the library');
      response.status(400).json({ error: 'Book already exists' });
      return; // Exit the route handler
    }

    // Get the author or create a new one
    let author = await Author.findOne({ name: request.body.author.name });

    if (!author) {
      author = new Author(request.body.author);
      await author.save();
    }

    const newBook = new Book({
      author: author._id,
      title: request.body.title,
      publishingDate: parseInt(request.body.publishingDate),
    });

    await newBook.save();
    console.log('New book added:', newBook);
    response.status(201).json(newBook); // Return the new book with a 201 status (Created)
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Failed to add book' });
  }
});


app.get('/books/authors/:id', async (request, response) => {
  const { id } = request.params;
  try {
    const author = await Author.findById(id);

    if (!author) {
      return response.status(404).json({ error: 'Author not found' });
      // ^^^ Return a 404 status code and an error message
    }

    const authorBooks = await Book.find({ author: author.id }).select('title publishingDate');
    console.log(author, authorBooks);

    response.json({ author, authorBooks });
  } catch (error) {
    console.log('err', error);
    response.status(500).json({ error: 'Error fetching author details' });
    // ^^^ Return a 500 status code and an error message for other errors
  }
})


app.get('/books/list/:id', async (request, response) => {
  const { id } = request.params
  try {
      const book = await Book.findOne({
          _id: id
      }).populate('author')
      if (!book) {
          return response.status(404).json({ error: 'Book not found' })
      }
      response.json(book)
  }
  catch (error) {
      response.status(500)
      console.log('err', error)
  }
})

app.delete('/books/list/:id', async (request, response) => {
  const { id } = request.params
  try {
      const book = await Book.deleteOne({
          _id: id
      })
    
      response.sendStatus(204)
  }
  catch (error) {
      response.sendStatus(500)
      console.log('err', error)
  }
})

app.put('/books/list/:id', async (req, res) => {

  const id = req.params.id
  try {
      const book = await Book.updateOne(
          { 
              "_id": id
          },
          { 
              title: req.body.title,
              publishingDate: parseInt(req.body.publishingDate)
          })
      res.json({ message: "book has been updated" })
  } catch (error) {
      res.status(500)
      console.log('err', error)
  }
})

app.post('/user/login', async (req, res) => {
  const now = new Date()
  if (await User.count({'userEmail': req.body.email}) === 0) {
    const newUser = new User({userEmail: req.body.email, lastLogin:now})
    newUser.save()
    .then(() => {
      res.sendStatus(200)
    })
  } else {
    await User.findOneAndUpdate({'userEmail': req.body.email, lastLogin: now})
    res.sendStatus(200)
  }
})


// const Book = mongoose.model('Book', {title: String, author: String})
// const entry = new Book({title: "Harry Potter and the Philosopher's stone", author: 'JK Rowling'})
// await entry.save()

// app.get('/', async (req, res) => {
//   try {
//     await entry.save()
//     res.json({
//       message: 'Book has been saved'
//     })
//   }
//   catch (error) {
//     console.error(error)
//     res.status(500).json({error: 'Failed to save book'})
//   }
// })

// app.get('/books/list', async (req, res) => {
//   try {
//     // code here - to fetch the list of book from mongo
//     const books = []
//     for await (const res of Book.find()){
//       books.push(res)
//     }

//     res.json({
//       result: books
//     })
//   }
//   catch (error) {
//     console.log(error)
//     res.status(500).json({error: `${error} ${Book}`})
//   }
// })

// app.get('/authors/list', async (req, res) => {
//   // add code instructions here
// })

// const port = process.env.PORT || 4000

// app.listen(port, () => {
//   console.log(`listening on port: ${port}`)
// })


// // passes as a parameter into the url
// app.get('/cats', async (req, res) => {
//   try {
//     const cats = await Cat.find({});
//     res.json(cats);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to fetch cats' });
//   }
// })

// app.get('/dogs', (req, res) => {
  //   res.json(dogs)
  // })
  
  // app.get('/dogs/:id', (req, res) => {
    //     const id = parseInt(req.params.id)
    //     const dog = dogs.find(dog => (
      //       dog.id === id
      //     ))
      //     res.json(dog)
      //   })
      
      
      // app.get('/', async (req, res) => {
      //   try {
      //     await kitty.save()
      //     res.json({
      //       message: 'Kitty has been saved',
      //     })
      //   } catch (error) {
      //     console.error(error)
      //     res.status(500).json({ error: 'Failed to save kitty' })
      //   }
      // })
      // Define the Cat model once, outside of any route handler
      // This ensures it's only defined once
      // const kitty = new Cat({ name: 'Bobo', age: 1 })
      // const Cat = mongoose.model('Cat', { name: String, age: Number })
      // app.get('/cat-facts', (req, res) => {
        //   fetch('https://cat-fact.herokuapp.com/facts')
        //   .then((response) => speechSynthesis.json())
//   .then( data => {
//     req.json(data)
//   })
// })

              
// goes into the back end, more secure
// app.post('/cats/add', (req, res) => {
//   const cat = req.body
//   const kitty = new Cat({name: cat.name, age: parseInt(cat.age)})
//   kitty.save()
//   .then(() =>{
//     console.log(`New Cat ${cat.name} age: ${cat.age} was added`)
//     res.sendStatus(200)
//   })
//   .catch(error => {
//     console.error(error)
//     res.sendStatus(error)
//   })
// })

// const middlewares = require('./middlewares');
// app.use(middlewares.setHeaders);

// const routes = require('./routes');
// app.use('/github_api', routes);


// Find the dog with the matching ID in the dogs array
// const foundDog = dogs.find((dog) => dog.id === dogId)
// if (foundDog) {
  //   res.json(foundDog) // Return the dog as JSON
  // } else {
    //   res.status(404).json({ error: 'Dog not found' }) //  In case the dog is not found
    // }