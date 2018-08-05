import React from 'react';

export default class StoryNodeOptions extends React.Component {
  render() {
    if(this.props.options.length === 1) {
      return (
        <div>
          <button type="button" onClick={() => this.props.changeStoryNode(this.props.options[0])}>Next</button>
        </div>
      )
    } else {
      return (
        <div>
          <button type="button" onClick={() => this.props.changeStoryNode(this.props.options[0])}>'Wish For 200 Pounds'</button>
          <button type="button" onClick={() => this.props.changeStoryNode(this.props.options[1])}>'Throw in Fire'</button>
        </div>
      )
    }
  }
}
