import React from 'react';
import { connect } from 'react-redux';
import { getStoryNode, getStoryIndex, getSpeakerIndex, getIsStoryNodeEnd, getIsStoryNodeStart, getIsStoryNodeMiddle } from './helper.js';
import { changeNode, changeStoryIndex, changeSpeakerIndex } from '../actions/actions.js';
import StoryNodePlot from './storynodeplot.js';
import StoryNodeOptions from './storynodeoptions.js';
import ReturnDashboard from './returndashboard.js';
import NewStory from './newstory.js';
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
          speaker={this.props.storyNode.speaker[this.props.speakerIndex]}
          story={this.props.storyNode.story[this.props.storyIndex]}
        >
          {!this.props.isStoryNodeEnd && <button
            type="button"
            onClick={() => this.changeSpeakerIndex(this.props.speakerIndex + 1) && this.changeStoryIndex(this.props.storyIndex + 1)}
          >Next</button>}
        </StoryNodePlot>

        {this.props.isStoryNodeStart && <Save
          currentStoryNodeKey={this.props.storyNode.key}
          dispatch={this.props.dispatch}
        /> }
        {this.props.isStoryNodeStart && <Load
          changeStoryNode={this.changeStoryNode}
        />}
        {this.props.isStoryNodeStart && <Restart
          changeStoryNode={this.changeStoryNode}
        />}
        {this.props.isStoryNodeEnd && <StoryNodeOptions
          changeStoryNode={this.changeStoryNode}
          options={this.props.storyNode.options}
          buttons={this.props.storyNode.button}
          changeStoryIndex={this.changeStoryIndex}
          changeSpeakerIndex={this.changeSpeakerIndex}
        />}
        {this.props.isStoryNodeEnd && <NewStory
          options={this.props.storyNode.options}
          dispatch={this.props.dispatch}
        />}
        {this.props.isStoryNodeMiddle && <ReturnDashboard
          playButton={this.props.playButton}
          displayDashboard={this.props.displayDashboard}
        />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    storyNode: getStoryNode(state),
    storyIndex: getStoryIndex(state),
    speakerIndex: getSpeakerIndex(state),
    isStoryNodeEnd: getIsStoryNodeEnd(state),
    isStoryNodeStart: getIsStoryNodeStart(state),
    isStoryNodeMiddle: getIsStoryNodeMiddle(state)
   }
}

export default connect(mapStateToProps)(StoryNode);
