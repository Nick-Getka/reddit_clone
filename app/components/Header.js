import React from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as allActions from '../actions';

import snuLogo from '../static/img/snu.png'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){

    return(
      <AppBar
        className="app-bar"
        title="Simply Reddit"
        onLeftIconButtonClick = {() => this.props.toggleDrawer(!this.props.open)}
        >
        <a href="/">
          <img className="title-logo" src={snuLogo} alt="redditLogo"/>
        </a>
      </AppBar>

    );
  }
};

function mapStateToProps(state){
  return {
    open: state.drawerReducer.open
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({...allActions}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Header);
