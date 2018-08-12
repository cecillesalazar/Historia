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
export const getSpeakerIndex = (state) => getGame(state).speakerIndex;

export const getIsStoryNodeEnd = converge(
  (storyIndex, speakerIndex, storyNode) => storyIndex === storyNode.story.length - 1 && speakerIndex === storyNode.speaker.length - 1,
  [getStoryIndex, getSpeakerIndex, getStoryNode]
)

export const getIsStoryNodeStart = converge(
  (storyIndex, speakerIndex) => storyIndex === 0 && speakerIndex === 0,
  [getStoryIndex, getSpeakerIndex]
)

export const getIsStoryNodeMiddle = converge(
  (isStoryNodeStart, isStoryNodeEnd) => !isStoryNodeStart && !isStoryNodeStart,
  [getIsStoryNodeStart, getIsStoryNodeEnd]
)
