import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dogs from './data/dogs.js';
import { Octokit } from '@octokit/rest';
import fetch from 'node-fetch';
import mongoose from 'mongoose';
import multer from 'multer';


// MongoDB create connections
const catConnection = mongoose.createConnection(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const libraryConnection = mongoose.createConnection(process.env.LIBRARY_DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });


// Connection events for cats
catConnection.on('connected', () => {
  console.log('MongoDB Connected for cats');
});

catConnection.on('error', (err) => {
  console.log('MongoDB connection error for cats:', err);
});

// Connection events for library
libraryConnection.on('connected', () => {
  console.log('MongoDB Connected for library');
});

libraryConnection.on('error', (err) => {
  console.log('MongoDB connection error for library:', err);
});

//! SCHEMAS

// Mongoose: Cats Schema and Model
const kittySchema = new mongoose.Schema({
  name: String,
  age: Number,
  description: String,
  imageUrl: String,
  likes: [String],
  dislikes: [String],
});

const Kitten = catConnection.model('Kitten', kittySchema, 'kittenInfo');

const authorSchema = new mongoose.Schema({
  name: String,
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
  picture: String,
  age: Number,
  numberOfBooks: Number,
  description: String,
});

const Author = libraryConnection.model('Author', authorSchema, 'authors');


// Book Schema
const bookSchema = new mongoose.Schema({
  title: String,
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
  publicationDate: Date,
  coverPicture: String,
  blurb: String,
});


const Book = libraryConnection.model('Book', bookSchema, 'books');


// Load environment variables
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const app = express();

// Setup multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage });

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Serve files from the uploads folder
app.use('/uploads', express.static('uploads'));


app.get('/', (req, res) => {
  res.json({
    message: 'Hello MEVN env!'
  });
});

app.get('/dogs/:id', (req, res) => {
  const dogId = parseInt(req.params.id, 10);
  const dog = dogs.find(d => d.id === dogId);

  if (dog) {
    res.json(dog);
  } else {
    res.status(404).json({ message: 'Dog not found' });
  }
});

app.get('/user/:user', async (req, res) => {
  const username = req.params.user;
  try {
    const { data } = await octokit.rest.users.getByUsername({
      username,
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

app.get('/repo/:user/:reponame', async (req, res) => {
  const { user, reponame } = req.params;
  try {
    const { data } = await octokit.rest.repos.get({
      owner: user,
      repo: reponame,
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

app.get('/catfacts', async (req, res) => {
  try {
    const response = await fetch('https://cat-fact.herokuapp.com/facts');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch cat facts', error: error.message });
  }
});

// kitten routes
app.get('/kittens', async (req, res) => {
  const kittens = await Kitten.find();
  res.json(kittens);
});

app.post('/kittens', upload.single('image'), async (req, res) => {
  const { name, age, description, likes, dislikes } = req.body;
  const parsedLikes = JSON.parse(likes);
  const parsedDislikes = JSON.parse(dislikes);
  const imageUrl = req.file ? req.file.path : "";
  const newKitten = new Kitten({ name, age, description, imageUrl, likes: parsedLikes, dislikes: parsedDislikes });
  await newKitten.save();
  res.json(newKitten);
});

//! LIBRARY 

// Fetch all authors
app.get('/authors', async (req, res) => {
  try {
    const authors = await Author.find().populate('books');
    res.json(authors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch authors' });
  }
});

// Fetch all books
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find().populate('authorId');
    console.log("Populated Books:", books);
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch books' });
  }
});

app.post('/books', upload.single('coverPicture'), async (req, res) => {
  const { title, author, blurb, publicationDate } = req.body;
  const coverPicture = req.file ? req.file.path : "";

  try {
    // Try to find the author by their name
    let authorToUpdate = await Author.findOne({ name: author });

    let authorId;

    if (authorToUpdate) {
      // Update the author's list of books if they exist
      authorId = authorToUpdate._id;
    } else {
      // Create a new author if they don't exist
      const newAuthor = new Author({
        name: author,
        books: []  // empty array
      });
      await newAuthor.save();
      authorId = newAuthor._id;
    }

    // Create the new book
    const newBook = new Book({
      title,
      authorId,
      blurb,
      publicationDate: new Date(publicationDate),  // Explicitly convert to Date
      coverPicture
    });
    await newBook.save();

    // Update the author's list of books
    await Author.findByIdAndUpdate(authorId, { $push: { books: newBook._id } });

    res.json(newBook);  // Respond with the new book
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to add book' });
  }
});

// Update a book
app.put('/books/:id', async (req, res) => {
  const bookId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(bookId, updatedData, { new: true });
    res.json(updatedBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update book' });
  }
});


// Delete a book
app.delete('/books/:id', async (req, res) => {
  const bookId = req.params.id;

  try {
    await Book.findByIdAndDelete(bookId);
    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete book' });
  }
});

// Update an author
app.put('/authors/:id', async (req, res) => {
  const authorId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedAuthor = await Author.findByIdAndUpdate(authorId, updatedData, { new: true });
    res.json(updatedAuthor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update author' });
  }
});

// Delete an author
app.delete('/authors/:id', async (req, res) => {
  const authorId = req.params.id;

  try {
    await Author.findByIdAndDelete(authorId);
    res.json({ message: 'Author deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete author' });
  }
});


//! PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.get('/dogs', (req, res) => {
  res.json(dogs);
});
