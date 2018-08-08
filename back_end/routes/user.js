const express = require('express');

const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

const User = require('../user-schema.js');
const router = express.Router();
router.use(express.json());

const localStrategy = new LocalStrategy((username, password, done) => {
  let user;
  User
    .findOne({ username })
    .then(results => {
      user = results;

      if (!user) {
        return Promise.reject({
          reason: 'LoginError',
          message: 'Incorrect username',
          location: 'username'
        });
      }

      return user.validatePassword(password);
    })
    .then(isValid => {
      if (!isValid) {
        return Promise.reject({
          reason: 'LoginError',
          message: 'Incorrect password',
          location: 'password'
        });
      }
      return done(null, user);
    })
    .catch(err => {
      if (err.reason === 'LoginError') {
        return done(null, false);
      }

      return done(err);

    });
});

passport.use(localStrategy);

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  User
    .findById(id)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/', (req, res, next) => {
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

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { saveFile } = req.body;
  const updatedUser = { saveFile };

  if(saveFile) {
    User.findById(id, function(err, user) {
      if(err) {
        next(err);
      } else {
        user.saveFile = saveFile;
        user.save((err, saveUser) => {
          if(err) {
            next(err);
          } else {
            res.location(`${req.originalUrl}`).status(201).json(saveUser)
          }
        })
      }
    })
  }
})

module.exports = router;
