import 'dotenv/config';
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    lastLoginTime:
    {
      type: Number, 
      required: true ,
      default: function(){
        return new Date().getTime();
      }
    } 
  }, {
    timestamp: true
  });
 
  const User = mongoose.model('User', userSchema);
  export default User;