import React from 'react';
import ReactDOM from 'react-dom';
import App from './component-app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
