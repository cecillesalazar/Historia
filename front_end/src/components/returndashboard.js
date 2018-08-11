import React from 'react';
import {connect} from 'react-redux';

class ReturnDashboard extends React.Component {
  render() {
    return (
          <div>
            <button type="button" onClick={this.props.displayDashboard}>Back to Dashboard</button>
          </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playButton: state.game.playButton,
   }
}

export default connect(mapStateToProps)(ReturnDashboard);
