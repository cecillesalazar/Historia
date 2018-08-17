const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  startNode: { type: String, required: true },
  storyGraph: { type: Object, required: true },
  speakers: { type: Object, required: true },
})

module.exports = mongoose.model('User', userSchema);
