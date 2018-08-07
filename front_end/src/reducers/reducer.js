import helper from '../components/helper.js';
import { saveFileSuccess } from '../actions/actions.js';

const initialState = {
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
  } else {
    return state;
  }
}
