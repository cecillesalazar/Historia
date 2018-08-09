import React from 'react';
import { loadGame } from '../backendApi.js';

export default class Load extends React.Component {
  render() {
    return (
      <div>
        <button type="button" onClick={() => loadGame().then(this.props.changeStoryNode)}>Load</button>
      </div>
    )
  }
}
