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

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['https://kb-login.netlify.app', 'http://localhost:3000'], // Add localhost for local development
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));


// Routes
app.use('/api/auth', authRoutes);

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
