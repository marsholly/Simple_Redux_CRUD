import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
