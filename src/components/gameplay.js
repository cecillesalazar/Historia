import React from 'react';
import './components-css/gameplay.css'

export default class Gameplay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render(){
    return(
      <div>
        <h1 className="title">{this.props.title}</h1>
        <div className="buttons-container">
          <button className="login-button" type="button">Login</button>
          <button className="signup-button" type="button">Signup</button>
        </div>
      </div>
    )
  }
}
