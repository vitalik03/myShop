const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json());

  app.listen(() => {
    console.log('*** Server Started ***');
  });