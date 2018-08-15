import React from 'react';
import './components-css/storynodescript.css';
import Typing from 'react-typing-animation';

export default class StoryNodeScript extends React.Component {
  render() {
    return (
      <div>
        <div className="speaker-name">
          <p>{this.props.speaker}</p>
        </div>
        <div className="dialogue-box">
          <Typing>
            <p className="dialogue">{this.props.story}</p>
          </Typing>
            {this.props.children}
        </div>
      </div>
    )
  }
}
