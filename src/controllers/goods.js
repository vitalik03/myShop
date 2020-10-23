/* eslint-disable max-len */
const Goods = require('../db/goodsService');
const constants = require('../constants/index');
const variantOfMeasurability = require('../enums/variantsOfMeasurability');

const createGoods = async (req, res) => {
  const goodsData = req.body;
  if (goodsData.measurability === variantOfMeasurability.KG || goodsData.measurability === variantOfMeasurability.UNIT) {
    const goods = await new Goods().createGoods(goodsData);
    return res.status(constants.STATUS.Ok).json(goods);
  }
  return res.status(constants.STATUS.BadRequest).json(constants.Measurability);
};

const deleteGoods = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(constants.STATUS.BadRequest).json(constants.BAD_REQUEST);
  const findDeleteGoods = await new Goods().getOneGoods(id);
  if (findDeleteGoods) {
    const deletedGoods = await new Goods().deleteGoodsById(id);
    return res.status(constants.STATUS.Ok).json(deletedGoods);
  }
  return res.status(constants.STATUS.NotFound).json(constants.NOT_FOUND);
};

const updateGoods = async (req, res) => {
  const goodsData = req.body;
  const { id } = req.params;
  if (!id) return res.status(constants.STATUS.BadRequest).json(constants.BAD_REQUEST);
  const findUpdateGoods = await new Goods().getOneGoods(id);
  if (findUpdateGoods) {
    if (goodsData.measurability === variantOfMeasurability.KG || goodsData.measurability === variantOfMeasurability.UNIT) {
      const updatedGoods = await new Goods().updateGoods(id, goodsData);
      return res.status(constants.STATUS.Ok).json(updatedGoods);
    }
    return res.status(constants.STATUS.BadRequest).json(constants.Measurability);
  }
  return res.status(constants.STATUS.NotFound).json(constants.NOT_FOUND);
};

const getOneGoods = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(constants.STATUS.BadRequest).json(constants.BAD_REQUEST);
  const findOne = await new Goods().getOneGoods(id);
  if (findOne) return res.status(constants.STATUS.Ok).json(findOne);
  return res.status(constants.STATUS.NotFound).json(constants.NOT_FOUND);
};

const getAllGoods = async (req, res) => {
  const findAll = await new Goods().getAllGoods();
  return res.status(constants.STATUS.Ok).json(findAll);
};

module.exports = {
  createGoods,
  deleteGoods,
  updateGoods,
  getOneGoods,
  getAllGoods,
};
