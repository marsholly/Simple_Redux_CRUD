import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';


const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
