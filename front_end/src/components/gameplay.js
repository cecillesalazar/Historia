import React from 'react';
import './components-css/login.css';

export default class Gameplay extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.storyNode.story}</h1>
      </div>
    )
  }

}
