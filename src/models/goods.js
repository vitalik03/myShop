const mongoose = require('mongoose');

const { Schema } = mongoose;

const userScheme = new Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 25,
  },
  price: {
    type: Number,
  },
  expirationDate: {
    type: String,
  },
  measurability: {
    type: String,
  },
  count: {
    type: Number,
  },
});

module.exports = userScheme;
