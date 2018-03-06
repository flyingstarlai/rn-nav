import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import AppNavigation from './src/navigations/AppNavigation';

const navReducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state);
  return newState || state;
};


export default () => {
  const rootReducer = combineReducers({
    nav: navReducer,
  });
  return createStore(rootReducer);
};
