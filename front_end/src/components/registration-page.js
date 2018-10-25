import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import RegistrationForm from './registration-form';
import './components-css/registration-page.css'

export function RegistrationPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <section className="home">
            <h1 className="logo" id="logo">Historia</h1>
            <RegistrationForm />
            <div className="login-link">
              <Link id="login" to="/">Login</Link>
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
