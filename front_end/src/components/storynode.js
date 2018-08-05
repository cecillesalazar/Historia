import React from 'react';
import { connect } from 'react-redux';
import helper from './helper.js';
import StoryNodeOptions from './storynodeoptions.js';
import { changeNode } from '../actions/actions.js';

class StoryNode extends React.Component {
  render() {
      return (
        <div>
          <h1>{this.props.storyNode.story}</h1>
          <StoryNodeOptions />
        </div>
      )
  }

}

function mapStateToProps(state) {
  return { storyNode: helper.getStoryNode(state.currentStoryNodeKey) }
}

export default connect(mapStateToProps)(StoryNode);
