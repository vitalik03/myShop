const mongoose = require('mongoose');
const variantsOfMeasurability = require('../enums/variantsOfMeasurability');

const { Schema } = mongoose;

const goodsScheme = new Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 25,
  },
  price: {
    type: Number,
  },
  expirationDate: {
    type: Date,
  },
  measurability: {
    type: variantsOfMeasurability,
  },
  count: {
    type: Number,
  },
  provider_id: {
    type: Schema.ObjectId,
    ref: 'Provider',
  },
});

module.exports = goodsScheme;
