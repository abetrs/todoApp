// requiring modules
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const helmet = require('helmet');
const todoRoutes = require('./todos/todo');
const errorhandler = require('errorhandler');
// Setting port and IP
const port = process.env.PORT || 5000;
const url = process.env.URL || 'localhost';
// Connect to mongoose
mongoose.connect('mongodb://127.0.0.1:27017', console.log('Connected to mongo'));
// Middlewares
app.use(cors());
app.use(morgan('short'));
app.use(errorhandler());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Routes
app.use('/todos', todoRoutes);
// Listening on http://localhost:5000
app.listen(port, url, console.log(`http://${url}:${port}`));