import { AppContainer } from 'react-hot-loader';
import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { Header } from 'components';
import { logout } from 'redux/modules/auth';
import './app.css';

const App = ({
  children,
  handleLogout,
  isAuthenticated,
  path,
}) => (
  <AppContainer>
    <div className="app">
      <Header
        currentPath={path}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
      />
      <div>{children}</div>
    </div>
  </AppContainer>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  path: state.routing.locationBeforeTransitions.pathname,
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
