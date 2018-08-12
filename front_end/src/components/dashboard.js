import React from 'react';
import StoryNode from './storynode.js';
import Tutorial from './tutorial.js';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { displayGameplay, displayTutorial, changeStory } from '../actions/actions.js';
import { getPlayButton, getTutorialButton } from './helper.js';
import { getRandomStory } from '../backendApi.js';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.displayGameplay = this.displayGameplay.bind(this);
    this.displayTutorial = this.displayTutorial.bind(this);
    this.displayDashboard = this.displayDashboard.bind(this);

  }

  displayGameplay() {
    getRandomStory().then(async (story) => {
      await this.props.dispatch(changeStory(story))
      this.props.dispatch(displayGameplay(true))
    })
  }

  displayDashboard() {
    this.props.playButton ? this.props.dispatch(displayGameplay(false)) : ''
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
            <StoryNode
            playButton={this.props.playButton}
            displayDashboard={this.displayDashboard}
            />
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
        playButton: getPlayButton(state),
        tutorialButton: getTutorialButton(state)
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
