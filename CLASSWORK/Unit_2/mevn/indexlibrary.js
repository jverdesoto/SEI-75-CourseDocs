import 'dotenv/config';
import express, { response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from 'mongoose';

const app = express()

app.use(cors())
app.use(bodyParser.json())
const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

mongoose.connect(process.env.DATABASE_URL, {
    dbName: 'library'
});
// const catSchema = { name: String, age:Number }
// const Cat = mongoose.model('Cat', catSchema)

// Define the schema for your "library" collection.
const librarySchema = new mongoose.Schema({
    title: String, // Title of the book
    publishingDate: Number, // Date the book was published
    author: String, // Author of the book
  });
  // Create a model for the "library" collection using the defined schema.
  const newLibraryBook = mongoose.model('newLibraryBook', librarySchema)

 // Define a route that creates and saves a sample book in the database.
app.get('/', function(request, response) {
    
        response.json({
          message: 'HomePage'
        });
     
  });

  app.post('/books/add', (clientRequest, booksServerResponse) => {
    // Extract the book data from the client's request body.
    const newLibraryBookData = clientRequest.body
    console.log(newLibraryBook)

   

    // Create a new 'Cat' model instance with the cat's name and age.
    const newBook = new newLibraryBook({ title: newLibraryBookData.bookTitle, publishingDate: parseInt(newLibraryBookData.publishingDate), author: (newLibraryBookData.authorName) })

    // Save the 'newCat' instance to the MongoDB database.
    newBook.save()
        .then(() => {
            // Log a message indicating that a new cat was added successfully.
            console.log(`New book titles ${newLibraryBookData.bookTitle} published ${newLibraryBookData.publishingDate} by ${newLibraryBookData.authorName} was added to the database`);
            
            // Send an HTTP response with status code 200 (OK) to the client.
            booksServerResponse.sendStatus(200)
        })
        .catch(error => {
            // If there is an error during the save operation, log the error to the console.
            console.error(error)

            // Send an HTTP response with the same status code as the error to the client.
            booksServerResponse.sendStatus(error).json
        })
})

// app.get('/dogs', (req, res) => {
//     res.json( dogs )
// })

// const token = process.env.DATABASE_URL
// const ROOT_URL =

app.get('/books/titlesearch', async (req, titleServerResponse) => {
    const titles = await newLibraryBook.find({})
        titleServerResponse.json(titles);
    
})