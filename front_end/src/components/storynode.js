import React from 'react';
import { connect } from 'react-redux';
import { getStoryNode, getStoryIndex, getIsStoryNodeEnd, getIsStoryNodeStart, getIsStoryNodeMiddle, getScript, getSpeaker, getUrl, classNames } from './helper.js';
import { changeNode, incrementStoryIndex, changeSpeakerIndex, resetStoryIndex } from '../actions/actions.js';
import StoryNodeScript from './storynodescript.js';
import StoryNodeOptions from './storynodeoptions.js';
import ReturnDashboard from './returndashboard.js';
import NewStory from './newstory.js';
import Save from './save.js';
import Load from './load.js';
import Restart from './restart.js';
import './components-css/storynode.css';

class StoryNode extends React.Component {
  changeStoryNode = (storyNodeKey) => this.props.dispatch(changeNode(storyNodeKey));
  incrementStoryIndex = () => this.props.dispatch(incrementStoryIndex());
  resetStoryIndex = () => this.props.dispatch(resetStoryIndex());

  render() {

    return (
      <div className={classNames({
        'story-node-start': this.props.isStoryNodeStart,
        'story-node-end': this.props.isStoryNodeEnd,
        'story-node-middle': this.props.isStoryNodeMiddle
      })}>
        <StoryNodeScript
          speaker={this.props.speaker}
          script={this.props.script.text}
          url={this.props.url}
        >
          {!this.props.isStoryNodeEnd && <button
            className="next-button"
            type="button"
            onClick={this.incrementStoryIndex}
          >Next</button>}
        </StoryNodeScript>
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
          resetStoryIndex={this.resetStoryIndex}
          options={this.props.storyNode.options}
          buttons={this.props.storyNode.button}
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
    isStoryNodeEnd: getIsStoryNodeEnd(state),
    isStoryNodeStart: getIsStoryNodeStart(state),
    isStoryNodeMiddle: getIsStoryNodeMiddle(state),
    script: getScript(state),
    url: getUrl(state),
    speaker: getSpeaker(state)
   }
}

export default connect(mapStateToProps)(StoryNode);
