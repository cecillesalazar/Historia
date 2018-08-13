import React from 'react';

export default class StoryNodeScript extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>{this.props.speaker}</p>
          <p>{this.props.story}</p>
          {this.props.children}
        </div>
      </div>
    )
  }
}
