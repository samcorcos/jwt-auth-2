//Main starting point of the application

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const router =  require('./router');
const mongoose = require('mongoose');

//DB Setup

mongoose.connect('mongodb://0.0.0.0:auth/auth'); 

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));

// Routing
router(app);

// Server Setup
const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);