import React from 'react';

export default class StoryNodePlot extends React.Component {
  render() {
    const storyMap = this.props.story.map((block, index) => (
      <div>
        <p>{this.props.speakingOrder[index]}</p>
        <p>{block[index]}</p>
      </div>
    ));
    return (
      <div>
        {storyMap}
      </div>
    )
  }
}
