import { converge } from 'ramda'
const getGame = (state) => state.game;
export const getPlayButton = (state) => getGame(state).playButton;
export const getTutorialButton = (state) => getGame(state).tutorialButton;
const getCurrentStory = (state) => getGame(state).currentStory;
const getCurrentStoryGraph = (state) => getCurrentStory(state).storyGraph;
const getCurrentStoryNodeKey = (state) => getGame(state).currentStoryNodeKey;

/* MEOW  look at this impl */
const getStoryNode = converge(
  (storyGraph, key) => storyGraph[key],
  [getCurrentStoryGraph, getCurrentStoryNodeKey],
)

export default {
  getStoryNode,
};
