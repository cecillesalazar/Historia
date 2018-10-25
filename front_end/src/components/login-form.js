import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import './components-css/login-form.css';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    demoLogin = () => {
      document.getElementById('username').value = 'demouser';
      document.getElementById('password').value = 'demopassword';
      setTimeout(() => {
        this.props.dispatch(login('demouser', 'demopassword'))
      }, 500);
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
          <div className="container">
            <h3 className="logo" id="logo">Historia</h3>

            <section className="header-text">
              <p>Historia is a game where you choose your own path.</p>
              <p>Your adventure awaits, are you ready?</p>
            </section>

            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button className="login-button" disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
                <div className='demo-account-container'>
                    <button className='demo-account' onClick={() => this.demoLogin()}>Play Demo</button>
                </div>
            </form>
            
          </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
