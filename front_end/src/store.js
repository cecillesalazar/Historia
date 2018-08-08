import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/reducer';
import { reducer as formReducer } from 'redux-form';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
      reducer,
      form: formReducer,
      auth: authReducer,
      protectedData: protectedDataReducer
    }),
    composeEnhancers(
    applyMiddleware(thunk)
  ));

export default store;
