import helper from '../components/helper.js';
import { saveFileSuccess } from '../actions/actions.js';

import { STORIES } from '../backendApi.js' // Temp stop gap get rid of me!!

const initialState = {
  currentStory: STORIES[0],
  currentStoryNodeKey: 'SERG_ARRIVES',
  playButton: false,
  tutorialButton: false,
  storyIndex: 0,
  speakerIndex: 0
};

export const reducer = (state = initialState, action) => {
  if(action.type === 'CHANGE_NODE') {
    return Object.assign({}, state, {
      currentStoryNodeKey: action.currentNode
    })
  } else if(action.type === 'SAVE_FILE_SUCCESS') {
    return Object.assign({}, state, {
      currentStoryNodeKey: action.storyNode
    })
  } else if(action.type === 'CHANGE_STORY') {
    return Object.assign({}, state, {
      currentStoryGraph: action.story,
      currentStoryNodeKey: action.story.startNode
    })
  } else if(action.type === 'DISPLAY_GAMEPLAY') {
    return Object.assign({}, state, {
      playButton: action.bool
    })
  } else if(action.type === 'DISPLAY_TUTORIAL') {
    return Object.assign({}, state, {
      tutorialButton: action.bool
    })
  } else if(action.type === 'CHANGE_STORY_INDEX') {
    return Object.assign({}, state, {
      storyIndex: action.num
    })
  } else if(action.type === 'CHANGE_SPEAKER_INDEX') {
    return Object.assign({}, state, {
      speakerIndex: action.num
    })
  } else {
    return state;
  }
}
