import React from 'react';
import {MenuItem} from '@material-ui/core/MenuItem';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setActivePost} from "../modules/setActivePost";

class PostButton extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    const {onLeftRailClick, setActivePost, post} = this.props;
    onLeftRailClick();
    setActivePost(post);
  }

  render(){
    const {open, post} = this.props;
    var finalTitle = post.title.split(' ');
    finalTitle = finalTitle.length > 5 ? finalTitle.slice(0,4).join(' ').concat(' . . . ') : finalTitle.slice(0,5).join(' ');
    return(
      <MenuItem
        className = "menu-item"
        onClick = {() => this.handleClick(open, post)}
        primaryText={finalTitle}
      />
    );
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setActivePost,
  }, dispatch);
};

export default connect(null, matchDispatchToProps)(PostButton);