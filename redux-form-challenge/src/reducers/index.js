import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

const fakeReducer = (s= null) => s;

export default 

createStore(
  combineReducers({
    main: fakeReducer,
    form: formReducer
  }),
  applyMiddleware(thunk)
);