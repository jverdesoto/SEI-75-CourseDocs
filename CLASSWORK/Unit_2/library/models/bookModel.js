import 'dotenv/config'
import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
    title:{type: String, required: true},
    description:{type: String},
    publishedDate: {
        type: Date,
        default: function(){
            return new Date();
        }
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    }
});

const Book = mongoose.model('books', bookSchema);
export default Book;
