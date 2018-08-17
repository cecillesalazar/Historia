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
            <li>Click the <strong>Play</strong> to receive a random story.</li>
            <li>In the beginning of every chapter, you may...
              <ul>
                  <li><strong>Save</strong> to bookmark your progress.</li>
                  <li><strong>Load</strong> your previously saved progress.</li>
                  <li><strong>Restart</strong> your progress from the very beginning.</li>
              </ul>
            </li>
            <li>You may also elect to return to your dashboard at anytime by clicking <strong>Back To Dashboard</strong>.</li>
            <li>Once you complete your story and reach an ending, click <strong>Play New Story</strong> to play another story!</li>
          </ol>

        <h3>A few pointers...</h3>

          <ol>
            <li>You are only allowed <strong>one</strong> saved state per story. In short, clicking savewhen you already have a previous save will <strong>overwrite</strong> the previous one.</li>
            <li>Keep in mind that <strong>restart</strong> takes you to the very beginning of the story, <strong>NOT</strong> the chapter.</li>
          </ol>

        <h3>Your story awaits...are you ready?</h3>
        <button type="button" className="tutorial-button" onClick={() => this.props.returnFromTutorial()}>Back to Dashboard!</button>

      </div>
    )
  }
}
