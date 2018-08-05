import React from 'react';
import { connect } from 'react-redux';
import helper from './helper.js';
import { StoryNodeOptions } from './storynodeoptions.js';
import { changeNode } from '../actions/actions.js';

class StoryNode extends React.Component {
  render() {
    if(this.props.storyNode.options.length === 1) {
      return (
        <div>
          <h1>{this.props.storyNode.story}</h1>
          <button type="button" onClick={() => this.props.dispatch(changeNode(this.props.storyNode.options[0]))}>Next</button>
        </div>
      )
    } else {
      return <div>Hello world</div>
    }
  }

}

function mapStateToProps(state) {
  return { storyNode: helper.getStoryNode(state.currentStoryNodeKey) }
}

export default connect(mapStateToProps)(StoryNode);
