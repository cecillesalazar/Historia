const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
});

module.exports = mongoose.model('Story', storySchema, 'stories');
