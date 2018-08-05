import React from 'react';
import { saveGame } from '../backendApi.js'

export default class Save extends React.Component {
  render() {
    return (
      <div>
        <button type="button" onClick={() => saveGame(this.props.currentStoryNodeKey)}>Save</button>
      </div>
    )
  }
}
