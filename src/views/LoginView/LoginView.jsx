import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'components';
import { login } from 'redux/modules/auth';

import './login-view.css';

class LoginView extends Component { // eslint-disable-line
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { onLoginClick, next } = this.props;

    e.preventDefault();
    onLoginClick(
      this.usernameInput.value,
      this.passwordInput.value,
      next
    );
  }

  render() {
    const { auth } = this.props;
    return (
      <div className="login-view container">
        <Spinner isVisible={auth.isAuthenticating} />
        <form
          className="login-form"
          onSubmit={this.handleSubmit}
        >
          <h2 className="form-login-heading">{auth.statusText}</h2>
          <label htmlFor="inputEmail" className="sr-only">Username</label>
          <input
            id="inputEmail"
            className="form-control"
            type="text"
            placeholder="Username"
            ref={ref => { this.usernameInput = ref; }}
            disabled={auth.isAuthenticating}
            required
          />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input
            id="inputPassword"
            className="form-control"
            type="password"
            placeholder="password"
            ref={ref => { this.passwordInput = ref; }}
            disabled={auth.isAuthenticating}
            required
          />

          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            disabled={auth.isAuthenticating}
          >
            Log in
          </button>
        </form>
      </div>
    );
  }
}

LoginView.propTypes = {
  auth: PropTypes.object.isRequired,
  onLoginClick: PropTypes.func.isRequired,
  next: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth,
  next: ownProps.location.query.next,
});

const mapDispatchToProps = dispatch => ({
  onLoginClick: (username, password, redirect) => {
    dispatch(login(username, password, redirect));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
