import React from 'react';
import Gameplay from './gameplay.js';
import Tutorial from './tutorial.js';
import { connect } from 'react-redux';
import { displayGameplay, displayTutorial } from '../actions/actions.js';

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.displayGameplay = this.displayGameplay.bind(this);
    this.displayTutorial = this.displayTutorial.bind(this);
  }

  displayGameplay() {
    !this.props.playButton ? this.props.dispatch(displayGameplay(true)) : ''
  }

  displayTutorial() {
    !this.props.tutorialButton ? this.props.dispatch(displayTutorial(true)) : ''
  }

  render() {
    if(this.props.playButton) {
      return (
        <div>
          <Gameplay />
        </div>
      )
    } else if(this.props.tutorialButton) {
      return (
        <div>
          <Tutorial />
        </div>
      )
    } else {
      return (
        <div>
          <button type="button" onClick={() => this.displayGameplay()}>Play</button>
          <button type="button" onClick={() => this.displayTutorial()}>How to Play</button>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    playButton: state.playButton,
    tutorialButton: state.tutorialButton
   }
}

export default connect(mapStateToProps)(Menu);
