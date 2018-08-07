import React from 'react';
import { connect } from 'react-redux';
import helper from './helper.js';
import { changeNode } from '../actions/actions.js';
import StoryNodeOptions from './storynodeoptions.js';
import Save from './savefeature.js';
import Load from './loadfeature.js';

class StoryNode extends React.Component {
  changeStoryNode = (storyNodeKey) => this.props.dispatch(changeNode(storyNodeKey));

  render() {
      return (
        <div>
          <h1>{this.props.storyNode.story}</h1>
          <StoryNodeOptions
            changeStoryNode={this.changeStoryNode}
            options={this.props.storyNode.options}
          />
          <Save
            currentStoryNodeKey={this.props.storyNode.key}
            dispatch={this.props.dispatch}
          />
          <Load
            changeStoryNode={this.changeStoryNode}
          />
        </div>
      )
  }

}

function mapStateToProps(state) {
  return {
    storyNode: helper.getStoryNode(state.currentStoryNodeKey)
   }
}

export default connect(mapStateToProps)(StoryNode);
