const express = require('express');
const router = express.Router();
router.use(express.json());

const User = require('../user-schema.js');

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
