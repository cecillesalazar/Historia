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

router.post('/', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const requiredFields = ['username', 'password'];
  const missingField = requiredFields.find(field => !(field in req.body));

  if (missingField) {
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Missing field',
      location: missingField
    });
  }

  const stringFields = ['username', 'password'];
  const nonStringField = stringFields.find(
    field => field in req.body && typeof req.body[field] !== 'string'
  );

  if (nonStringField) {
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Incorrect field type: expected string',
      location: nonStringField
    });
  }

  const explicityTrimmedFields = ['username', 'password'];
  const nonTrimmedField = explicityTrimmedFields.find(
    field => req.body[field].trim() !== req.body[field]
  );

  if (nonTrimmedField) {
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Cannot start or end with whitespace',
      location: nonTrimmedField
    });
  }

  const sizedFields = {
    username: {
      min: 1
    },
    password: {
      min: 8,
      max: 72
    }
  };
  const tooSmallField = Object.keys(sizedFields).find(
    field =>
      'min' in sizedFields[field] &&
            req.body[field].trim().length < sizedFields[field].min
  );
  const tooLargeField = Object.keys(sizedFields).find(
    field =>
      'max' in sizedFields[field] &&
            req.body[field].trim().length > sizedFields[field].max
  );

  if (tooSmallField || tooLargeField) {
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: tooSmallField
        ? `Must be at least ${sizedFields[tooSmallField]
          .min} characters long`
        : `Must be at most ${sizedFields[tooLargeField]
          .max} characters long`,
      location: tooSmallField || tooLargeField
    });
  }
  return User
      .find({username})
      .count()
      .then(count => {
        if (count > 0) {
          return Promise.reject({
            code: 422,
            reason: 'ValidationError',
            message: 'Username already taken',
            location: 'username'
          });
        }
        return User.hashPassword(password);
      })
      .then(digest => {
        return User.create({
          username,
          password: digest
        });
      })
      .then(user => {
        return res.status(201).location(`${req.originalUrl}`).json(user.serialize());
      })
      .catch(err => {
        if (err.reason === 'ValidationError') {
          return res.status(err.code).json(err);
        }
        res.status(500).json({code: 500, message: 'Internal server error'});
      });
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
