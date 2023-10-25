import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  date: Date
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
