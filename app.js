const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const config = require('./config/config');

const dbConf = require('./db/dbConnection');

const { host } = dbConf.database.connection;
const { port } = dbConf.database.connection;
const { dbName } = dbConf.database.connection.database;
const { client } = dbConf.database;
const database = `${client}://${host}:${port}/${dbName}`;
mongoose.connect(database, { useNewUrlParser: true });

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json());

app.listen(config.api.port);
