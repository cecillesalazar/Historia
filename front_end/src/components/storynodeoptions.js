import React from 'react';

export default class StoryNodeOptions extends React.Component {
  render() {
    const options = this.props.options.map(option => (
      <button key={option} type="button" onClick={() => this.props.changeStoryNode(option)}>{option}</button>
    ));
    return (
      <div>
        {options}
      </div>
    )
  }
}
