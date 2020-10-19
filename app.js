const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const config = require('./config/config')
const dbConf = require('./db/dbConnection')

const host = dbConf.database.connection.host;
const port = dbConf.database.connection.port;
const dbName = dbConf.database.connection.database;
const client = dbConf.database.client;
const database = `${client}://${host}:${port}/${dbName}`;
mongoose.connect(database, {useNewUrlParser: true} , (err) => {
    if (err) console.log(err);
})

app
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json());

  app.listen(config.api.port, () => {
    console.log('*** Server Started ***');
  });