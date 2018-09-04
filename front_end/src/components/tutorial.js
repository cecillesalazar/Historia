import React from 'react';
import './components-css/tutorial.css';

export default class Tutorial extends React.Component {
  render() {
    return(
      <div className="tutorial-text">
        <h1>How To Play</h1>
        <h3>Historia is a collection of folktales from a myriad of cultures. Each story allows the user(you!)
        to carve your own path.</h3>
          <ol>
            <li>Click <strong>Play</strong> to receive a random story.</li>
            <li>In the beginning of every chapter, you may...
              <ul>
                  <li><strong>Save</strong> to bookmark your progress.</li>
                  <li><strong>Load</strong> your previously saved progress.</li>
                  <li><strong>Restart</strong> your progress from the very beginning.</li>
              </ul>
            </li>
            <li>You may also elect to return to the dashboard at anytime by clicking <strong>Back To Dashboard</strong>.</li>
            <li>Once you complete the story and reach an ending, click <strong>Play New Story</strong> to play another!</li>
          </ol>

        <h3>A Few Pointers...</h3>

          <ol>
            <li>You are only allowed <strong>ONE</strong> saved state per story. In short, saving more than once will <strong>overwrite</strong> your previous save.</li>
            <li>Keep in mind that <strong>restart</strong> takes you to the very beginning of the story, <strong>NOT</strong> the chapter.</li>
          </ol>

        <h3>Your story awaits...are you ready?</h3>
        <button type="button" className="tutorial-button" id="tutorial-button" onClick={() => this.props.returnFromTutorial()}>{'Let\'s go!'}</button>

      </div>
    )
  }
}
