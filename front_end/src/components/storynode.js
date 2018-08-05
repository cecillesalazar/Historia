import React from 'react';
import { connect } from 'react-redux';
import helper from './helper.js';
import { changeNode, saveNode } from '../actions/actions.js';
import StoryNodeOptions from './storynodeoptions.js';
import Save from './savefeature.js';

class StoryNode extends React.Component {
  changeStoryNode = (storyNodeKey) => this.props.dispatch(changeNode(storyNodeKey));
  saveStoryNode = (storyNodeKey) => this.props.dispatch(saveNode(storyNodeKey));

  render() {
      return (
        <div>
          <h1>{this.props.storyNode.story}</h1>
          <StoryNodeOptions
            changeStoryNode={this.changeStoryNode}
            options={this.props.storyNode.options}
          />
          <Save
            saveStoryNode={this.saveStoryNode}
            key={this.props.storyNode.key}
          />
        </div>
      )
  }

}

function mapStateToProps(state) {
  return { storyNode: helper.getStoryNode(state.currentStoryNodeKey) }
}

export default connect(mapStateToProps)(StoryNode);
