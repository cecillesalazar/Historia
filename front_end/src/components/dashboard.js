import React from 'react';
import StoryNode from './storynode.js';
import Tutorial from './tutorial.js';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { displayGameplay, displayTutorial, changeStory } from '../actions/actions.js';
import { getPlayButton, getTutorialButton } from './helper.js';
import { getRandomStory } from '../backendApi.js';
import './components-css/dashboard.css';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.displayGameplay = this.displayGameplay.bind(this);
    this.displayTutorial = this.displayTutorial.bind(this);
    this.displayDashboard = this.displayDashboard.bind(this);
    this.returnFromTutorial = this.returnFromTutorial.bind(this);
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

  returnFromTutorial() {
    this.props.tutorialButton ? this.props.dispatch(displayTutorial(false)) : ''
  }

    render() {
      if(this.props.playButton) {
        return (
          <div id="dashboard">
            <div className="dashboard-username">
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
            <Tutorial returnFromTutorial={this.returnFromTutorial}/>
          </div>
        )
      } else {
        return (
          <section className="dashboard">
          <h1 className="logo" id="logo">Historia</h1>
            <div className="buttons-container">
              <button type="button" className="play-button" id="play-button"onClick={() => this.displayGameplay()}>Play</button>
              <button type="button" className="tutorial-button" id="tutorial-button" onClick={() => this.displayTutorial()}>How to Play</button>
            </div>
          </section>
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
