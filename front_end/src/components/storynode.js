import React from 'react';
import { connect } from 'react-redux';
import { getStoryNode } from './helper.js';
import { changeNode } from '../actions/actions.js';
import StoryNodeOptions from './storynodeoptions.js';
import Save from './savefeature.js';
import Load from './loadfeature.js';
import Restart from './restartfeature.js';

class StoryNode extends React.Component {
  changeStoryNode = (storyNodeKey) => this.props.dispatch(changeNode(storyNodeKey));

  render() {
      return (
        <div>
          <h1>{this.props.storyNode.story}</h1>
          <StoryNodeOptions
            changeStoryNode={this.changeStoryNode}
            options={this.props.storyNode.options}
            buttons={this.props.storyNode.button}
          />
          <Save
            currentStoryNodeKey={this.props.storyNode.key}
            dispatch={this.props.dispatch}
          />
          <Load
            changeStoryNode={this.changeStoryNode}
          />
          <Restart
            changeStoryNode={this.changeStoryNode}
          />
        </div>
      )
  }

}

function mapStateToProps(state) {
  return {
    storyNode: getStoryNode(state)
   }
}

export default connect(mapStateToProps)(StoryNode);
