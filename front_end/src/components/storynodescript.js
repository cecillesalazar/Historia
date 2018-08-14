import React from 'react';
import './components-css/storynodescript.css';

export default class StoryNodeScript extends React.Component {
  render() {
    return (
      <div>
        <div className="speaker-name">
          <p>{this.props.speaker}</p>
        </div>
        <div className="dialogue-box">
          <p className="dialogue">{this.props.story}</p>
          {this.props.children}
        </div>
      </div>
    )
  }
}
