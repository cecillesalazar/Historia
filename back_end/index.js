'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const User = require('./user-schema.js');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');

const app = express();
app.use(express.json());

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.post('/', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = { username, password }
  User
  .create(newUser)
  .then(result => {
    res
      .location(`${req.originalUrl}`)
      .status(201)
      .json(result)
  })
  .catch(err => {
    next(err)
  })
})

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
