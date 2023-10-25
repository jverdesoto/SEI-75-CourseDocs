import { Router } from 'express';
import { getAllUsers, getUserById, createUser, loginUser } from '../controllers/userControllers.js';
import { authenticateJWT } from '../middleware/authMiddleware.js';
import dotenv from 'dotenv';

// Loading environment variables
dotenv.config();

const router = Router();

// Register a new user
router.post('/register', createUser);

// User login
router.post('/login', loginUser);

// Get all users
router.get('/', authenticateJWT, getAllUsers);


// Get user by ID
router.get('/:id', authenticateJWT, getUserById);

// Verify JWT token
router.get('/verify', authenticateJWT, (req, res) => {
    res.status(200).send({ valid: true, user: req.user });
  });

export default router;
