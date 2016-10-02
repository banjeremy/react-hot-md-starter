import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { requireAuth } from 'components';
import {
  App,
} from 'containers';
import {
  HomeView,
  LoginView,
  ProtectedView,
} from 'views';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={requireAuth(HomeView)} />
    <Route path="/login" component={LoginView} />
    <Route path="/protected" component={requireAuth(ProtectedView)} />
  </Route>
);

export default routes;
