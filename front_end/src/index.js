import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gameplay from './components/gameplay';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Gameplay
      storyNode={{
        key: 'SERG_ARRIVES',
        options: [
          'SERG_TELLS_STORY'
        ],
        story: 'Plot for SERG_ARRIVES',
      }}
    />,
  document.getElementById('root'));
registerServiceWorker();
