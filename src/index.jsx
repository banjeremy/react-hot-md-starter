import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import createStore from './redux/create';
import routes from './routes';
import Root from './Root';
import './index.css';

const store = createStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);


const rootEl = document.getElementById('root');

const render = () => {
  ReactDOM.render((
    <Root
      store={store}
      history={history}
      routes={routes}
    />
  ), rootEl);
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept(Root, () => {
    render();
  });
}
