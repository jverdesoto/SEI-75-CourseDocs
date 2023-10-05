import 'dotenv/config'
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String
  }, {
    timestamps: true
  });
 
module.exports = mongoose.model('User', userSchema);