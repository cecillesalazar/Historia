import React from 'react';
import './components-css/login.css';
import { connect } from 'react-redux';
import helper from './helper.js';

class Gameplay extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.storyNode.story}</h1>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return { storyNode: helper.getStoryNode(state.currentStoryNodeKey) }
}

export default connect(mapStateToProps)(Gameplay);
