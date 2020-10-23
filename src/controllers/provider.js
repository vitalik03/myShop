const Provider = require('../db/providerService');
const constants = require('../constants/index');

const createProvider = async (req, res) => {
  const providerData = req.body;
  const provider = await new Provider().createProvider(providerData);
  return res.status(constants.STATUS.Ok).json(provider);
};

const deleteProvider = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(constants.STATUS.BadRequest).json(constants.BAD_REQUEST);
  const findDeleteProvider = await new Provider().getOneProvider(id);
  if (findDeleteProvider) {
    const deletedProvider = await new Provider().deleteProviderById(id);
    return res.status(constants.STATUS.Ok).json(deletedProvider);
  }
  return res.status(constants.STATUS.NotFound).json(constants.NOT_FOUND);
};

const getOneProvider = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(constants.STATUS.BadRequest).json(constants.BAD_REQUEST);
  const findOne = await new Provider().getOneProvider(id);
  if (findOne) return res.status(constants.STATUS.Ok).json(findOne);
  return res.status(constants.STATUS.NotFound).json(constants.NOT_FOUND);
};

const getAllProvider = async (req, res) => {
  const findAll = await new Provider().getAllProviders();
  return res.status(constants.STATUS.Ok).json(findAll);
};

module.exports = {
  createProvider,
  deleteProvider,
  getOneProvider,
  getAllProvider,
};
