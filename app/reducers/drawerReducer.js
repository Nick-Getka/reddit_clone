import {TOGGLE_DRAWER} from '../actions';

const drawerReducer = (state={open: false}, action) => {
  switch(action.type){
    case TOGGLE_DRAWER:
      return Object.assign({}, state, {
        open: action.open
      })
    default:
      return state
  }
}

export default drawerReducer
