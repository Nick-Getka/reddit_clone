import React from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import LeftRail from './LeftRail';

import snuLogo from '../static/img/snu.png'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle(){
    console.log("test1")
    this.setState({open: !this.state.opsn})
  }

  render(){
    return(
      <AppBar
        title="Simply Reddit"
        onLeftIconButtonClick = { this.handleToggle.bind(this) }
        >
        <img className="title-logo" src={snuLogo} alt="redditLogo"/>
        <LeftRail open={this.state.open} toggleHandler={this.handleToggle}/>
      </AppBar>

    );
  }
};

export default Header;
