import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';


export default function requireAuthentication(Component) {
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps() {
      this.checkAuth();
    }

    checkAuth() {
      if (!this.props.isAuthenticated) {
        const redirectAfterLogin = `${this.props.location.pathname}${this.props.location.search}`;
        this.props.dispatch(push(`/login?next=${redirectAfterLogin}`));
      }
    }

    render() {
      return (
        <div>
          {this.props.isAuthenticated === true
           ? <Component {...this.props} />
           : null
          }
        </div>
      );
    }
  }

  AuthenticatedComponent.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
  };

  const mapStateToProps = (state, ownProps) => ({
    token: state.auth.token,
    userName: state.auth.userName,
    isAuthenticated: state.auth.isAuthenticated,
    location: ownProps.location,
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
}
