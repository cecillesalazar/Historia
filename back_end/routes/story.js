const express = require('express');

const Story = require('../story-schema.js');
const router = express.Router();
router.use(express.json());

router.post('/', (req, res, next) => {
  const { username } = req.params;
  const { description } = req.params;
  const { startNode } = req.params;
  const { storyGraph } = req.params;
  const { speakers } = req.params;

  return Story
      .create({
          username,
          description,
          startNode,
          storyGraph,
          speakers
        });
      })
      .then(story => {
        return res.status(201).location(`${req.originalUrl}`).json(story);
      })
      .catch(err => {
        next(err)
      });
})

module.exports = router;
