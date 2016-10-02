import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

const Root = ({
  store,
  history,
  routes,
}) => (
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
      onUpdate={() => window.scrollTo(0, 0)}
    />
  </Provider>
);

Root.propTypes = {
  routes: PropTypes.object,
  store: PropTypes.object,
  history: PropTypes.object,
};

export default Root;
