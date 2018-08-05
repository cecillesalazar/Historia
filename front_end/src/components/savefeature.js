import React from 'react';

export default class Save extends React.Component {
  render() {
    return (
      <div>
        <button type="button" onClick={() => this.props.saveStoryNode(this.props.key)}>Save</button>
      </div>
    )
  }
}
