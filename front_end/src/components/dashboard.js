import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

export class Dashboard extends React.Component {

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Logged in as: {this.props.username}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
