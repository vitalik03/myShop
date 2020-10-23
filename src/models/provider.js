const mongoose = require('mongoose');

const { Schema } = mongoose;

const providerScheme = new Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 25,
  },
});

module.exports = providerScheme;
