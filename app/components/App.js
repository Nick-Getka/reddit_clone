import React from 'react';
import Main from './Main';

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
        <Main />
      </MuiThemeProvider>
    );
  }
}

export default App;
