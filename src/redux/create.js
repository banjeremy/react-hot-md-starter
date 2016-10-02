import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from './modules/reducer';

export default function (history) {
  const store = createStore(
    reducer,
    window.devToolsExtension && window.devToolsExtension(),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  );

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer').default); // eslint-disable-line
    });
  }

  return store;
}
