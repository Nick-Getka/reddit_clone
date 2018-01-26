export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const SET_SUBREDDIT = 'SET_SUBREDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SET_ACTIVE_POST = 'SET_ACTIVE_POST';

export function toggleDrawer(open){
  return {
    type: TOGGLE_DRAWER,
    open
  }
};

export function setSubreddit(selectedSub){
  return {
    type: SET_SUBREDDIT,
    selectedSub
  }
};

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

function receivePosts(subreddit, posts) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts
  }
}

export function setActivePost(activePost) {
  return {
    type: SET_ACTIVE_POST,
    activePost
  }
}

export function fetchPostsIfNeeded(subreddit){
  return (dispatch, getState) => {
    if(shouldFetchPosts(getState(), subreddit)){
      return dispatch(fetchPostsFromAPI(subreddit, null))
    }
  }
}

function fetchPostsFromAPI(subreddit, next){
  var url = ""
  if (next !== null){
    url = 'http://www.reddit.com/r/'+subreddit+'.json?after='+next
  }
  else{
    url = 'https://www.reddit.com/r/'+subreddit+'.json'
  }
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(url)
    .then(response => response.json())
    .then(json => {
        if(json.error !== 404){
          dispatch(receivePosts(subreddit, json))
        }
      })
  }
}

function shouldFetchPosts(state){
  if(!state.fetchReducer.activePosts){
    return true;
  } else if (state.fetchReducer.isFetching){
    return false;
  }
  else{
    return true;
  }
}
