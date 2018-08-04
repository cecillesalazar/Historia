import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Gameplay from './components/gameplay';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Gameplay
      storyNode={{
        key: 'SERG_ARRIVES',
        options: [
          'SERG_TELLS_STORY'
        ],
        story: 'Plot for SERG_ARRIVES',
      }}
    />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
