import React from 'react';
import AppBar from 'material-ui/AppBar';

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
        onLeftIconButtonClick = {()=>{this.props.onLeftRailClick()}}
        >
        <a href="/">
          <img className="title-logo" src={snuLogo} alt="redditLogo"/>
        </a>
      </AppBar>

    );
  }
};

export default Header;
