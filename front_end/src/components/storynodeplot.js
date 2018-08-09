import React from 'react';

export default class StoryNodePlot extends React.Component {
  render() {
    if(this.props.storyIndex >= this.props.storyNodeStoryArray.length - 1 && this.props.speakerIndex >= this.props.storyNodeSpeakerArray.length - 1) {
      return (
        <div>
          <div>
            <p>{this.props.speaker[this.props.speakerIndex]}</p>
            <p>{this.props.story[this.props.storyIndex]}</p>
          </div>
        </div>
      )
    }
    return (
      <div>
        <div>
          <p>{this.props.speaker[this.props.speakerIndex]}</p>
          <p>{this.props.story[this.props.storyIndex]}</p>
          <button type="button" onClick={() => this.props.changeSpeakerIndex(this.props.speakerIndex + 1) && this.props.changeStoryIndex(this.props.storyIndex + 1)}>Next</button>
        </div>
      </div>
    )
  }
}
