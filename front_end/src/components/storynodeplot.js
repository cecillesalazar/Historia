import React from 'react';

export default class StoryNodePlot extends React.Component {
  render() {
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
