// requiring modules
const express = require('express');
const app = express();

// Connect to mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017', console.log('Connected to mongo'));

// Middleware requires
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const errorhandler = require('errorhandler');
// Own files
const todoRoutes = require('./todos/todo');
const userRoutes = require('./auth/user');

// Setting port and IP
const port = process.env.PORT || 5000;
const url = process.env.URL || 'localhost';

// Using Middlewares 
app.use(cors());
app.use(morgan('short'));
app.use(errorhandler());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/todos', todoRoutes);
app.use('/auth/user', userRoutes);

// Listening on http://localhost:5000
app.listen(port, url, console.log(`http://${url}:${port}`));