const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL
, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//when do I include the mongoDB database? also what is the deal with mongoDB saying to change the firstDatabase line to _____? (check mongoDB website) 


// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

module.exports = db;