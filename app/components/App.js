import React from 'react';
import MainContainer from './MainContainer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {darkBlack, cyan500} from 'material-ui/styles/colors'
const muiTheme = getMuiTheme({
  palette:{
    primary1Color: cyan500,
    textColor: darkBlack,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <MainContainer />
      </MuiThemeProvider>
    );
  }
}

export default App;
