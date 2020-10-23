const mongoose = require('mongoose');

const providerSchema = require('../models/provider');

const provider = mongoose.model('provider', providerSchema);

class Provider {
  static get tableNAme() {
    return 'provider';
  }

  createProvider(providerData) {
    return new Promise(async (resolve, reject) => {
      await provider.create(providerData, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  getAllProviders() {
    return new Promise(async (resolve, reject) => {
      await provider.find({}, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  getOneProvider(id) {
    return new Promise(async (resolve, reject) => {
      await provider.findById(id, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  deleteProviderById(id) {
    return new Promise(async (resolve, reject) => {
      await provider.findByIdAndDelete(id, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }
}

module.exports = Provider;
