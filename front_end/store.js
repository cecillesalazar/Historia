import { createStore } from 'redux'

import { reducer } from './reducers';

export default createStore(reducer, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());
