import React from 'react';
import './components-css/storynodeoptions.css';

export default class StoryNodeOptions extends React.Component {
  render() {
    const options = this.props.options.map((option, index) => (
      <button className="story-change-button" style={{left: (11 * index) + 5 + "%"}} key={option} type="button" onClick={() => {
        this.props.resetStoryIndex();
        this.props.changeStoryNode(option)}}>
        {this.props.buttons[index]}
      </button>
    ));
    return (
      <div>
        {options}
      </div>
    )
  }
}
