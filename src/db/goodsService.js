const mongoose = require('mongoose');

const goodsSchema = require('../models/goods');

const goods = mongoose.model('goods', goodsSchema);

class Goods {
  static get tableNAme() {
    return 'goods';
  }

  createGoods(goodsData) {
    return new Promise(async (resolve, reject) => {
      await goods.create(goodsData, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  getAllGoods() {
    return new Promise(async (resolve, reject) => {
      await goods.find({}, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  getOneGoods(id) {
    return new Promise(async (resolve, reject) => {
      await goods.findById(id, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  deleteGoodsById(id) {
    return new Promise(async (resolve, reject) => {
      await goods.findByIdAndDelete(id, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }

  updateGoods(id, goodsData) {
    return new Promise(async (resolve, reject) => {
      await goods.findByIdAndUpdate(id, goodsData, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }
}

module.exports = Goods;
