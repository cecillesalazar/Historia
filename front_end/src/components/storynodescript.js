import React from 'react';
import './components-css/storynodescript.css';
import Typing from 'react-typing-animation';
import sha1 from 'sha1';

export default class StoryNodeScript extends React.Component {
  render() {
    return (
      <div>
        <div className="speaker-name">
          <p>{this.props.speaker}</p>
        </div>
        <div className="dialogue-box">
          <Typing key={sha1(this.props.story)} speed={30}>
            <p className="dialogue">{this.props.story}<Typing.Cursor /></p>
          </Typing>
          {this.props.children}
        </div>
      </div>
    )
  }
}
