const getStoryNode = (state) => { return state.currentStory.storyGraph[state.currentStoryNodeKey] };

export default {
  getStoryNode
};
