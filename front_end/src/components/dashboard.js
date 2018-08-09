import React from 'react';
import Gameplay from './gameplay.js';
import Tutorial from './tutorial.js';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { displayGameplay, displayTutorial } from '../actions/actions.js';

export class Dashboard extends React.Component {
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
          <div className="dashboard">
            <div className="dashboard-username">
              Logged in as: {this.props.username}
            </div>
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
          <div className="dashboard">
            <div className="dashboard-username">
              Logged in as: {this.props.username}
            </div>
            <button type="button" onClick={() => this.displayGameplay()}>Play</button>
            <button type="button" onClick={() => this.displayTutorial()}>How to Play</button>
          </div>
        )
      }
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        playButton: state.game.playButton,
        tutorialButton: state.game.tutorialButton
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
