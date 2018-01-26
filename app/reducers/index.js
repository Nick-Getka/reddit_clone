import {combineReducers} from 'redux';
import drawerReducer from './drawerReducer';
import subredditReducer from './subredditReducer';
import fetchReducer from './fetchReducer';
import activePostReducer from './activePostReducer';

const reducers = combineReducers({
    drawerReducer,
    subredditReducer,
    fetchReducer,
    activePostReducer
  }

);

export default reducers;
