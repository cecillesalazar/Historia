import helper from '../components/helper.js';
import { saveFileSuccess } from '../actions/actions.js';

const initialState = {
  currentStoryGraph: null,
  currentStoryNodeKey: helper.STORY_GRAPH['SERG_ARRIVES'].key
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
  } else {
    return state;
  }
}
