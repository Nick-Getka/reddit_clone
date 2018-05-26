import axios from 'axios';
import initialState from './initialState';
import {setActivePost} from "./setActivePost";

const FETCH_POSTS = 'FETCH_POSTS';
const IS_VALID = 'IS_VALID';

const setPosts = (posts) => {
  return {
    type: FETCH_POSTS,
    posts
  };
};

const setIsValid = (isValid) => {
  return {
    type: IS_VALID,
    isValid,
  };
};

export const fetchPosts = (subreddit) => {
  var url = 'https://www.reddit.com/r/' + subreddit + '.json';
  return dispatch => {
    dispatch(setActivePost(null));
    axios.get(url)
      .then(res => res.data.data.children)
      .then(posts => posts.map(post => post.data))
      .then(posts => posts.filter(post => !post.stickied))
      .then(posts => {
        dispatch(setIsValid(true));
        dispatch(setPosts(posts));
      })
      .catch((e) => {
        dispatch(setIsValid(false));
        dispatch(setPosts([]));
      });
  };
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return Object.assign({}, state, {
        posts: action.posts,
      });
    case IS_VALID:
      return Object.assign({}, state, {
        isValid: action.isValid,
      });
    default:
      return state;
  }
};