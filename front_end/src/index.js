import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gameplay from './components/gameplay';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Gameplay />, document.getElementById('root'));
registerServiceWorker();
