import React from 'react';

export default class StoryNodePlot extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>{this.props.speaker[this.props.speakerIndex]}</p>
          <p>{this.props.story[this.props.storyIndex]}</p>
          <button type="button">Next</button>
        </div>
      </div>
    )
  }
}
