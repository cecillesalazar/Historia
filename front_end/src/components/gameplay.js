import React from 'react';
import { connect } from 'react-redux';
import './components-css/login.css';

export class Gameplay extends React.Component {

  render() {
    return (
      <h1>Hello world</h1>
    )
  }

}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Gameplay);
