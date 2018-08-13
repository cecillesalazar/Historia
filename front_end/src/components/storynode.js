import React from 'react';
import { connect } from 'react-redux';
import { getStoryNode, getIsStoryNodeEnd, getIsStoryNodeStart, getIsStoryNodeMiddle, getScript } from './helper.js';
import { changeNode, incrementStoryIndex, changeSpeakerIndex } from '../actions/actions.js';
import StoryNodePlot from './storynodeplot.js';
import StoryNodeOptions from './storynodeoptions.js';
import ReturnDashboard from './returndashboard.js';
import NewStory from './newstory.js';
import Save from './save.js';
import Load from './load.js';
import Restart from './restart.js';

class StoryNode extends React.Component {
  changeStoryNode = (storyNodeKey) => this.props.dispatch(changeNode(storyNodeKey));
  incrementStoryIndex = () => this.props.dispatch(incrementStoryIndex());

  render() {
    return (
      <div>
        <StoryNodePlot
          speaker={this.props.script.speaker}
          story={this.props.script.text}
        >
          {!this.props.isStoryNodeEnd && <button
            type="button"
            onClick={this.incrementStoryIndex}
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
    isStoryNodeEnd: getIsStoryNodeEnd(state),
    isStoryNodeStart: getIsStoryNodeStart(state),
    isStoryNodeMiddle: getIsStoryNodeMiddle(state),
    script: getScript(state)
   }
}

export default connect(mapStateToProps)(StoryNode);
