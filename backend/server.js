const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Declare 'cors' only once
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express App
const app = express();

// List of allowed origins
const allowedOrigins = [
  'https://67625cb11c02658092371ce6--melodious-medovik-c34b46.netlify.app', // Frontend 1
  'https://euphonious-buttercream-6950f4.netlify.app'  // Frontend 2
];

// CORS middleware
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Allow credentials (cookies, headers)
}));

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
