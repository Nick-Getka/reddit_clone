import {SET_SUBREDDIT} from '../actions';

const subredditReducer = (state={
  selectedSub: "r/"
}, action) => {
  switch(action.type){
    case SET_SUBREDDIT:
      return Object.assign({}, state, {
        selectedSub:action.selectedSub
      })
    default:
      return state
  }
}

export default subredditReducer
