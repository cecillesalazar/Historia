import React from 'react';

export default class StoryNodeOptions extends React.Component {
  render() {
    if(this.props.options.length === 1) {
      return (
        <div>
          <button type="button" onClick={() => this.props.changeStoryNode(this.props.options[0])}>Next</button>
        </div>
      )
    } else if (this.props.options.length === 0) {
      return '';
    } else {
      return (
        <div>
          <button type="button" onClick={() => this.props.changeStoryNode(this.props.options[0])}>{this.props.options[0]}</button>
          <button type="button" onClick={() => this.props.changeStoryNode(this.props.options[1])}>{this.props.options[1]}</button>
        </div>
      )
    }
  }
}
