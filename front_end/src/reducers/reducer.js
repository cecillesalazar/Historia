import helper from '../components/helper.js';

const initialState = {
  currentStoryNodeKey: helper.SERG_ARRIVES
};

export const reducer = (state = initialState, action) => {
  if(action.type === 'CHANGE_NODE') {
    return Object.assign({}, state, {
      currentStoryNodeKey: action.currentNode
    })
  } else {
    return state;
  }
}
