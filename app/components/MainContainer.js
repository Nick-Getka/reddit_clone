import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainBody from './MainBody';
import LeftRail from './LeftRail';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="container">
        <Header />
        <MainBody />
        <LeftRail />
        <Footer />
      </div>
    );
  }
};

export default MainContainer;
