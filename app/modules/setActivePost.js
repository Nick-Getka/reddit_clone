import initialState from './initialState';

const SET_ACTIVE_POST = 'SET_ACTIVE_POST';

export const setActivePost = (activePost) => {
  return {
    type: SET_ACTIVE_POST,
    activePost
  };
};

export const setActivePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_POST:
      return Object.assign({}, state, {
        activePost: action.activePost,
      });
    default:
      return state;
  }
};