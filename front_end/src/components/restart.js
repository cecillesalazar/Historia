import React from 'react';
import helper from '../components/helper.js';
import './components-css/restart.css';

export default class Restart extends React.Component {
  render() {
    return (
        <button className="restart-button" type="button" onClick={() => this.props.changeStoryNode(this.props.startNode)}>Restart</button>
    )
  }
}
