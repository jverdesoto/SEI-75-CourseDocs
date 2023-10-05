import 'dotenv/config';
import mongoose, { Schema } from "mongoose";
// import Book from './bookModel.js'

const authorSchema = new Schema({
    name:{type: String, required: true},
    // books: [Book]
});

export default mongoose.model('author', authorSchema);
