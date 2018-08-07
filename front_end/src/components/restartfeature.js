import React from 'react';

export default class Restart extends React.Component {
  render() {
    return (
      <div>
        <button type="button" onClick={() => this.props.changeStoryNode('SERG_ARRIVES')}>Restart</button>
      </div>
    )
  }
}
