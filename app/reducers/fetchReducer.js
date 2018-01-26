import {REQUEST_POSTS, RECEIVE_POSTS, SET_SUBREDDIT} from '../actions';

const fetchReducer = (state={
    isFetching: false,
    activePosts: null,
  }, action) => {
  switch(action.type){
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        activePosts: action.posts
      })
    case SET_SUBREDDIT:
      return Object.assign({}, state, {
        activePosts: null
      })
    default:
      return state
  }
}

export default fetchReducer
