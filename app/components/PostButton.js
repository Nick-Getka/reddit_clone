import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux';
import * as allActions from '../actions';
import {bindActionCreators} from 'redux';

class PostButton extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(op, post){
    this.props.setActivePost(post);
    this.props.toggleDrawer(!op);
  }
  render(){
    const {open, post} = this.props
    return(
      <MenuItem
        onClick = {() => this.handleClick(open, post)}
        primaryText={post.title}
      />
    );
  };
};

function mapStateToProps(state){
  return {
    open: state.drawerReducer.open
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({...allActions}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PostButton);
