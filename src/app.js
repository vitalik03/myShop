const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const goodsRoute = require('./routes/goods/index');
const providerRoute = require('./routes/providers/index');
const config = require('./config/config');
const dbConf = require('./db/dbConnection');

const app = express();

const { host } = dbConf.database.connection;
const { port } = dbConf.database.connection;
const { databaseName } = dbConf.database.connection;
const { client } = dbConf.database;
const database = `${client}://${host}:${port}/${databaseName}`;
mongoose.connect(database, { useNewUrlParser: true });

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json());

app
  .use('/goods', goodsRoute)
  .use('/provider', providerRoute);

app.listen(config.api.port);
