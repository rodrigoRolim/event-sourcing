const express = require('express');
const routes = require('./routes');
const database = require('./config/database');


const configExpress = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded());
  app.use('/posts', routes);
  
  return app;
}

module.exports = () => database.connect().then(configExpress);
