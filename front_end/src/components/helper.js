import { converge } from 'ramda'
const getGame = (state) => state.game;
export const getPlayButton = (state) => getGame(state).playButton;
export const getTutorialButton = (state) => getGame(state).tutorialButton;
const getCurrentStory = (state) => getGame(state).currentStory;
const getCurrentStoryGraph = (state) => getCurrentStory(state).storyGraph;
const getCurrentStoryNodeKey = (state) => getGame(state).currentStoryNodeKey;

/* MEOW  look at this impl */
export const getStoryNode = converge(
  (storyGraph, key) => storyGraph[key],
  [getCurrentStoryGraph, getCurrentStoryNodeKey],
)

export const getStoryIndex = (state) => getGame(state).storyIndex;

export const getIsStoryNodeEnd = converge(
  (storyIndex, storyNode) => storyIndex === storyNode.story.length - 1,
  [getStoryIndex, getStoryNode]
)

export const getIsStoryNodeStart = converge(
  (storyIndex) => storyIndex === 0,
  [getStoryIndex]
)

export const getIsStoryNodeMiddle = converge(
  (isStoryNodeStart, isStoryNodeEnd) => !isStoryNodeStart && !isStoryNodeStart,
  [getIsStoryNodeStart, getIsStoryNodeEnd]
)

export const getStoryNodeStories = (state) => getStoryNode(state).story;

export const getStoryNodeStory = converge(
  (stories, storyIndex) => stories[storyIndex],
  [getStoryNodeStories, getStoryIndex]
)
