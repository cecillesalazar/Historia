import React from 'react';
import { saveGame } from '../backendApi.js';
import { saveFileSuccess } from '../actions/actions.js';
import './components-css/save.css'

export default class Save extends React.Component {
  render() {
    return (
      <div>
        <button className="save-button" type="button" onClick={() => saveGame(this.props.currentStoryNodeKey).then(this.props.dispatch(saveFileSuccess(this.props.currentStoryNodeKey)))}>Save</button>
      </div>
    )
  }
}
