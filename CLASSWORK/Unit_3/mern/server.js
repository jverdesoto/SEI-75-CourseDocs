import { config } from 'dotenv';
import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import userRoutes from './routes/userRoutes.js';
import Order from './models/orderModel.js';
import cors from 'cors'

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// MongoDB connection
const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

// ! routes
app.use('/api/users', userRoutes);

// Get all orders
app.get('/api/orders', async (req, res) => {
    const orders = await Order.find({});
    res.json(orders);
});
// Create new order
app.post('/api/orders', async (req, res) => {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
});

const port = process.env.PORT || 3001;

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Express running on port ${port}`));
