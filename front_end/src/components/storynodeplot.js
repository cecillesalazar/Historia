import React from 'react';

export default class StoryNodePlot extends React.Component {
  render() {
    const storyMap = this.props.story.map((block, index) => (
      <div>
        <p>{this.props.speakingOrder[index]}</p>
        <p>{block}</p>
      </div>
    ));
    return (
      <div>
        <div>
          <p>{this.props.firstSpeakerIndex}</p>
          <p>{this.props.firstStoryIndex}</p>
          <button type='button'>Next</button>
        </div>
      </div>
    )
  }
}
