import React from 'react';
import { loadGame } from '../backendApi.js';
import './components-css/load.css';

export default class Load extends React.Component {
  render() {
    return (
        <button className="load-button" id="load-button" type="button" onClick={() => loadGame().then(this.props.changeStoryNode)}>Load</button>
    )
  }
}
