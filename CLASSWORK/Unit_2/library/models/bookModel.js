import 'dotenv/config'
import mongoose, { Schema } from "mongoose";
// import authorSchema from './authorModel.js'

const bookSchema = new Schema({
    title:{type: String},
    description:{type: String, required: true},
    publishedDate: {
        type: Date,
        default: function(){
            return new Date().getFullYear();
        },
        min: 1927
    },
    author: {}
});

const Book = mongoose.model('books', bookSchema);
export default Book;



