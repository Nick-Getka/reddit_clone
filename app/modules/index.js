import {combineReducers} from 'redux';
import {fetchReducer} from './fetchPosts';
import {setActivePostReducer} from "./setActivePost";

const reducers = combineReducers({
    fetchReducer,
    setActivePostReducer
  }
);

export default reducers;
