import React from 'react';

export default class StoryNodeOptions extends React.Component {
  render() {
    const options = this.props.options.map((option, index) => (
      <button key={option} type="button" onClick={() => {
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
