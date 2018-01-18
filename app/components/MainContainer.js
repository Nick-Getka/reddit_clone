import React from 'react';
import Header from './Header';
import MainBody from './MainBody';

class MainContainer extends React.Component {
  render(){
    return(
      <div className="main-container">
        <Header />
        <MainBody />
      </div>
    );
  }
};

export default MainContainer;
