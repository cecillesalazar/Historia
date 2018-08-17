const express = require('express');

const Story = require('../story-schema.js');
const router = express.Router();
router.use(express.json());

router.get('/story', (req, res, next) => {
  Story.findOne().then((story) => res.json(story.toObject().story));
})

module.exports = router;
