import React from 'react';
import Gameplay from './gameplay.js';
import { connect } from 'react-redux';
import { displayGameplay } from '../actions/actions.js';

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.displayGameplay = this.displayGameplay.bind(this);
  }

  displayGameplay() {
    !this.props.playButton ? this.props.dispatch(displayGameplay(true)) : ''
  }

  render() {
    if(this.props.playButton) {
      return (
        <div>
          <Gameplay />
        </div>
      )
    } else {
      return (
        <div>
          <button type="button" onClick={() => this.displayGameplay()}>Play</button>
          <button type="button">How to Play</button>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    playButton: state.playButton
   }
}

export default connect(mapStateToProps)(Menu);
