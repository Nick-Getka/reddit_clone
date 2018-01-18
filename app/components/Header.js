import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import snuLogo from '../static/img/snu.png'

class Header extends React.Component {
  render(){
    return(
      <Toolbar id="head">
        <ToolbarGroup id="text-field">
          <TextField defaultValue="r/" />
        </ToolbarGroup>
        <ToolbarGroup id="title-logo-text">
          <img id="title-logo" src={snuLogo} alt="redditLogo"/>
          <ToolbarTitle text="Simply Reddit" />
        </ToolbarGroup>
      </Toolbar>
    );
  }
};

export default Header;
