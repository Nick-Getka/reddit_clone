import {SET_ACTIVE_POST} from '../actions';

const activePostReducer = (state={activePost: null}, action) => {
  switch(action.type){
    case SET_ACTIVE_POST:
      return Object.assign({}, state, {
        activePost:action.activePost
      })
    default:
      return state
  }
}

export default activePostReducer
