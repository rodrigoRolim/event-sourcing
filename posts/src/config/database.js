const mongoose = require('mongoose');

mongoose.Promise = Promise;
const mongodURL = process.env.MONGODB_URL || 'mongodb://localhost/post';
const connect = () => mongoose.connect(mongodURL, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = { connect }