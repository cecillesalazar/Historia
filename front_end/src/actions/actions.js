const CHANGE_NODE = 'CHANGE_NODE';
export const changeNode = (currentNode) => ({
  type: CHANGE_NODE,
  currentNode,
})

const SAVE_NODE = 'SAVE_NODE';
export const saveNode = (nodeToSave) => ({
  type: SAVE_NODE,
  nodeToSave,
})
