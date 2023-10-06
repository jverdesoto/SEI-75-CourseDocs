import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
}, {
  timestamps: true,
});

export default mongoose.model('User', userSchema);
