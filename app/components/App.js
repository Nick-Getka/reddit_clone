import React from 'react';
import Header from './Header';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  grey100, grey500, darkBlack,
  cyan500, cyan700, grey400,
  pinkA200, white, grey300, fullBlack} from 'material-ui/styles/colors'
const muiTheme = getMuiTheme({
  palette:{
    //primary1Color: pinkA200,
    //primary2Color: pinkA200,
    //primary3Color: pinkA200,
    //accent1Color: pinkA200,
    //accent2Color: pinkA200,
    //accent3Color: pinkA200,
    textColor: darkBlack,
    // alternateTextColor: white,
    // canvasColor: white,
    // borderColor: grey300,
    // disabledColor: darkBlack,
    // pickerHeaderColor: cyan500,
    // clockCircleColor: darkBlack,
    // shadowColor: fullBlack,
  },
});

class App extends React.Component {
  render(){
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <Header />
        I&#39;M A DIV!
      </MuiThemeProvider>
    );
  }
}

export default App;
