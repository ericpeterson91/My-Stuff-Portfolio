const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/items" || process.env.DATABASE_URL
, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

module.exports = db;

// "mongodb://localhost/items" ||

// || process.env.DATABASE_URL