import React from 'react';
import helper from '../components/helper.js';

export default class Restart extends React.Component {
  render() {
    return (
      <div>
        <button type="button" onClick={() => this.props.changeStoryNode(helper.STORY_GRAPH['SERG_ARRIVES'].key)}>Restart</button>
      </div>
    )
  }
}