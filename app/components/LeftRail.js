import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class LeftRail extends React.Component {
  render(){
    return(
      <Drawer
        docked={false}
        width={200}
        open={this.props.open}
      >
        <MenuItem onClick={this.props.toggleHandler}>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
};

export default LeftRail;
