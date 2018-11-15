const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const helmet = require('helmet');
const errorhandler = require('errorhandler');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('short'));
app.use(errorhandler());
app.use(helmet());

app.listen(port, console.log("Hello World"));

