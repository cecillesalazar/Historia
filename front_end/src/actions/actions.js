const CHANGE_NODE = 'CHANGE_NODE';
export const changeNode = (currentNode) => ({
  type: CHANGE_NODE,
  currentNode,
});

const CHANGE_STORY_INDEX = 'CHANGE_STORY_INDEX';
export const changeStoryIndex = (num) => ({
  type: CHANGE_STORY_INDEX,
  num
});

const SAVE_FILE_SUCCESS = 'SAVE_FILE_SUCCESS';
export const saveFileSuccess = storyNode => ({
    type: SAVE_FILE_SUCCESS,
    storyNode
});

const CHANGE_STORY = 'CHANGE_STORY';
export const changeStory = (story) =>({
  type: CHANGE_STORY,
  story
});

const DISPLAY_GAMEPLAY = 'DISPLAY_GAMEPLAY';
export const displayGameplay = (bool) => ({
  type: DISPLAY_GAMEPLAY,
  bool
});

const DISPLAY_TUTORIAL = 'DISPLAY_TUTORIAL';
export const displayTutorial = (bool) => ({
  type: DISPLAY_TUTORIAL,
  bool
});
