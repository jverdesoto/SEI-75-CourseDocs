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

// Define a route for handling a GET request to fetch all book titles.
//This line defines a GET request route using Express. 
//It listens for requests with a path like '/books/titlesearch'.
app.get('/books/titlesearch', async (req, titleServerResponse) => {
    // Use Mongoose to find all documents in the 'newLibraryBook' collection.
    //This line uses Mongoose's find method to query the 'newLibraryBook' collection 
    //in the MongoDB database. It finds and retrieves all documents (books) in the 
    //collection and assigns them to the titles variable.
    const title = await newLibraryBook.find({});

    // Send a JSON response containing the array of book titles to the client.
    //After retrieving the book titles, this line sends a JSON response to the client. It 
    //includes the titles array in the response body, making it available to the client-
    //side code.
    titleServerResponse.json(title);
})

app.get('/books/titledetails/:id', async (req, bookServerResponse) => {
    
    try {
    //This line extracts the value of the 'id' parameter from the request URL and assigns 
    //it to the variable bookId.
    const bookid = req.params.id
    console.log(bookid)

    //Here, Mongoose's findById method is used to look up a book in the 
    //'newLibraryBook' collection by its unique ID, which is specified by bookId. This 
    //operation is asynchronous and is awaited using the await keyword.
    const bookDetails =  await newLibraryBook.findById(bookid);
    bookServerResponse.json(bookDetails);

    }
    catch(error){
        bookServerResponse.status(error)
    }
})

app.get('/books/authorsearch', async (req, allauthorServerResponse) => {
    const allauthors = await newLibraryBook.distinct('author');
    allauthorServerResponse.json(allauthors)
})


app.get('/books/authordetails/:id', async (req, authorServerResponse) => {
    const authorid = req.params.id

    const authorDetails = await newLibraryBook.find({author: authorid})
    authorServerResponse.json(authorDetails);

})

//It defines an Express.js route for handling HTTP DELETE requests at the endpoint
///books/titledetails/:id, where :id is a parameter representing the _id of
//the book you want to delete.
app.delete('/books/titledetails/:id', async (req, deletebookServerResponse) => {
    //When a DELETE request is made to this endpoint, it extracts the bookId from the 
    //request's parameters using req.params.id.
    const bookid = req.params.id

    //It then attempts to delete the book document with the specified _id using the
    //deleteOne method provided by Mongoose, which is an Object Data Modeling
    //(ODM) library for MongoDB. The deleteOne method removes the first document 
    //  that matches the specified query (in this case, the _id).
    await newLibraryBook.deleteOne({'_id': bookid})
    .then(() => {
        deletebookServerResponse.sendStatus(200)
    })
    .catch(error => {
        deletebookServerResponse.sendStatus(500)
    })
}) 

add.put('/books/titledetails/:id', async (req, editbookServerResponse) => {
    //This line uses the updateOne method from the newLibraryBook object (presumably a MongoDB collection model) 
    //to update a document in the database. It takes two arguments:
        //The first argument is an object that specifies the query condition. It searches for a document with 
        //the specified _id (book ID) based on the value in req.params.id.
        //The second argument is an object that contains the new data you want to update. 
        //It includes the title and publishingDate fields, which are updated based on the values in the request's body.
    await newLibraryBook.updateOne({"_id": req.params.id}, {
        title: req.body.title, publishingDate: parseInt(req.body.publishingDate)
    })
    .then(() => {
        editbookServerResponse.sendStatus(200)
    })
    .catch(error => {
        editbookServerResponse.sendStatus(500)
    })
}) 