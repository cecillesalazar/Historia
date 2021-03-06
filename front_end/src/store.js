import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/reducer';
import { reducer as formReducer } from 'redux-form';
import { loadAuthToken , loadState, saveState } from './local-storage';
import authReducer from './reducers/auth';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    game: reducer,
    form: formReducer,
    auth: authReducer
  }),
  persistedState,
  composeEnhancers(
  applyMiddleware(thunk)
));

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
