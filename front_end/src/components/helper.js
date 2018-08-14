import { converge } from 'ramda'
const getGame = (state) => state.game;
export const getPlayButton = (state) => getGame(state).playButton;
export const getTutorialButton = (state) => getGame(state).tutorialButton;
const getCurrentStory = (state) => getGame(state).currentStory;
const getCurrentStoryGraph = (state) => getCurrentStory(state).storyGraph;
const getCurrentStoryNodeKey = (state) => getGame(state).currentStoryNodeKey;

const getSpeakers = (state) => getCurrentStory(state).speakers;
/* MEOW  look at this impl */
export const getStoryNode = converge(
  (storyGraph, key) => storyGraph[key],
  [getCurrentStoryGraph, getCurrentStoryNodeKey],
)

export const getScripts = (state) => getStoryNode(state).scripts;

export const getStoryIndex = (state) => getGame(state).storyIndex;

export const getIsStoryNodeEnd = converge(
  (storyIndex, stories) => storyIndex === stories.length - 1,
  [getStoryIndex, getScripts]
)

export const getIsStoryNodeStart = converge(
  (storyIndex) => storyIndex === 0,
  [getStoryIndex]
)

export const getIsStoryNodeMiddle = converge(
  (isStoryNodeStart, isStoryNodeEnd) => !isStoryNodeStart && !isStoryNodeEnd,
  [getIsStoryNodeStart, getIsStoryNodeEnd]
)

export const getScript = converge(
  (stories, storyIndex) => stories[storyIndex],
  [getScripts, getStoryIndex]
)

export const getSpeaker = converge(
  (script, speakers) => speakers[script.speakerKey].name,
  [getScript, getSpeakers]
)


//Takes an object with keys as potential class names
//and return a formatted className String with keys whos
//values are trueish.
export const classNames = (obj) =>  Object.keys(obj)
  .filter(key => obj[key])
  .join(' ');
