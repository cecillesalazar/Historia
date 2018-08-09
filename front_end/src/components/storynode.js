import React from 'react';
import { connect } from 'react-redux';
import { getStoryNode } from './helper.js';
import { changeNode, changeStoryIndex, changeSpeakerIndex } from '../actions/actions.js';
import StoryNodePlot from './storynodeplot.js';
import StoryNodeOptions from './storynodeoptions.js';
import Save from './save.js';
import Load from './load.js';
import Restart from './restart.js';

class StoryNode extends React.Component {
  changeStoryNode = (storyNodeKey) => this.props.dispatch(changeNode(storyNodeKey));
  changeStoryIndex = (storyIndex) => this.props.dispatch(changeStoryIndex(storyIndex));
  changeSpeakerIndex = (speakerIndex) => this.props.dispatch(changeSpeakerIndex(speakerIndex));

  render() {
      return (
        <div>
          <StoryNodePlot
            story={this.props.storyNode.story}
            speaker={this.props.storyNode.speaker}
            storyIndex={this.props.storyIndex}
            speakerIndex={this.props.speakerIndex}
            changeStoryIndex={this.changeStoryIndex}
            changeSpeakerIndex={this.changeSpeakerIndex}
            storyNodeStoryArray={this.props.storyNode.story}
            storyNodeSpeakerArray={this.props.storyNode.speaker}
          />
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
    storyNode: getStoryNode(state),
    storyIndex: state.game.storyIndex,
    speakerIndex: state.game.speakerIndex
   }
}

export default connect(mapStateToProps)(StoryNode);
