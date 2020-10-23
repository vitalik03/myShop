const express = require('express');

const providerController = require('../../controllers/provider');

const router = express.Router();

router
  .get('/', providerController.getAllProvider)
  .post('/', providerController.createProvider)
  .get('/:id', providerController.getOneProvider)
  .delete('/:id', providerController.deleteProvider);

module.exports = router;
