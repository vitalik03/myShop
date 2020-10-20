const express = require('express');

const goodsController = require('../../controllers/goods');

const router = express.Router();

router
  .get('/', goodsController.getAllGoods)
  .post('/', goodsController.createGoods)
  .get('/:id', goodsController.getOneGoods)
  .delete('/:id', goodsController.deleteGoods)
  .put('/:id', goodsController.updateGoods);

module.exports = router;
