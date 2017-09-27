// lib
import React from 'react'
// components
import  Header  from "./Header";
import  Home  from "./Home";
import  Title from "./Title"; 
// other

class Layout extends React.Component {
    constructor() {
      super();

      this.state={
        title: "welcome"
        
        }
    }


    chageTitle(title){
this.setState({title})

    }
  
    
    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <Home title={this.state.title}  chageTitle={this.chageTitle.bind(this)}/>
                    <Title title={this.state.title}  />
                    <div className="col-xs-10 col-xs-offset-1">
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;

