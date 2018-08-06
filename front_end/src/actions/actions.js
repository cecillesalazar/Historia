const CHANGE_NODE = 'CHANGE_NODE';
export const changeNode = (currentNode) => ({
  type: CHANGE_NODE,
  currentNode,
})

const SAVE_FILE_SUCCESS = 'SAVE_FILE_SUCCESS';
export const saveFileSuccess = storyNode => ({
    type: SAVE_FILE_SUCCESS,
    storyNode
});
