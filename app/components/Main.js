import React from 'react';
import Header from './Header';
import MainBody from './MainBody';
import LeftRail from './LeftRail';
import Footer from './Footer';



class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            openLeftRail:false,
        };

        this.onLeftRailClick = this.onLeftRailClick.bind(this);
    }

    onLeftRailClick(){
        const open = !this.state.openLeftRail;

        this.setState({
            openLeftRail: open,
        });
    }

    render(){
        return(
            <div className="container">
                <Header onLeftRailClick={this.onLeftRailClick}/>
                <MainBody />
                <LeftRail open={this.state.openLeftRail} onLeftRailClick={this.onLeftRailClick}/>
                <Footer />
            </div>
        );
    }
}

export default Main;