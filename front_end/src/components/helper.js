import { converge } from 'ramda'

const getCurrentStory = (state) => state.currentStory;
const getCurrentStoryGraph = (state) => getCurrentStory(state).storyGraph;
const getCurrentStoryNodeKey = (state) => state.currentStoryNodeKey;

/* MEOW  look at this impl */
const getStoryNode = converge(
  (storyGraph, key) => storyGraph[key],
  [getCurrentStoryGraph, getCurrentStoryNodeKey],
)

export default {
  getStoryNode
};
