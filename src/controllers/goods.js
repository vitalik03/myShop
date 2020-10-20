const Goods = require('../db/goodsService');

const createGoods = async (req, res) => {
  const goodsData = req.body;
  const goods = await new Goods().createGoods(goodsData);
  return res.status(200).json(goods);
};

const deleteGoods = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json('BAD_REQUEST');
  const findDeleteGoods = await new Goods().getOneGoods(id);
  if (findDeleteGoods) {
    const deletedGoods = await new Goods().deleteGoodsById(id);
    return res.status(200).json(deletedGoods);
  }
  return res.status(404).json('NOT_FOUND');
};

const updateGoods = async (req, res) => {
  const goodsData = req.body;
  const { id } = req.params;
  if (!id) return res.status(400).json('BAD_REQUEST');
  const findUpdateGoods = await new Goods().getOneGoods(id);
  if (findUpdateGoods) {
    const updatedGoods = await new Goods().updateGoods(id, goodsData);
    return res.status(200).json(updatedGoods);
  }
  return res.status(404).json('NOT_FOUND');
};

const getOneGoods = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json('BAD_REQUEST');
  const findOne = await new Goods().getOneGoods(id);
  if (findOne) return res.status(200).json(findOne);
  return res.status(404).json('NOT_FOUND');
};

const getAllGoods = async (req, res) => {
  const findAll = await new Goods().getAllGoods();
  return res.status(200).json(findAll);
};

module.exports = {
  createGoods,
  deleteGoods,
  updateGoods,
  getOneGoods,
  getAllGoods,
};
