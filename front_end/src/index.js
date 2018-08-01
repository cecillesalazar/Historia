import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Gameplay from './components/gameplay';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Gameplay />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
