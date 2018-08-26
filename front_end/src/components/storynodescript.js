import React from 'react';
import './components-css/storynodescript.css';
import Typing from 'react-typing-animation';

export default class StoryNodeScript extends React.Component {
  render() {
    return (
      <div>
        <div className="background-image-container">
          <img className="background-image" src={this.props.url} />
        </div>
        <div className="background-image-container">
          <img className="background-image" src={this.props.url} />
        </div>
        <div className="speaker-name-container">
          <p className="speaker-name">{this.props.speaker}</p>
        </div>
        <div className="speaker-image-container">
          <img className="speaker-image" src={this.props.speakerImage} />
        </div>
        <div className="dialogue-box">
          <Typing key={this.props.script} speed={25}>
            <p className="dialogue">{this.props.script}<Typing.Cursor /></p>
          </Typing>
          {this.props.children}
        </div>
      </div>
    )
  }
}
