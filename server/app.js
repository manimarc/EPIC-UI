// connection string
//mongodb+srv://mongo-marc:<PASSWORD>@marccluster-yyppi.mongodb.net/test?retryWrites=true;
const express = require('express');
//import moment from 'moment';
//import uuid from 'uuid';

// const bodyParser= require('body-parser');
// const mongoose= require('mongoose');
// const stuffRoutes= require('./routes/stuff');
// const userRoutes = require('./routes/user');
const app = express();

class Reflection {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.reflections = [];
  }

}
// app.use((req, res, next) => {

//   res.setHeader('Access-Control-Allow-Origin', '*');

//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');

//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

//   next();

// });
// app.use(bodyParser.json());
// app.use('/api/stuff', stuffRoutes);
// app.use('/api/auth', userRoutes);
module.exports = app;