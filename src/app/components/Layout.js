// lib
import React from 'react'
// components
import  Header  from "./Header";
import  Home  from "./Home";
import  Title from "./Title"; 
 
// other
import {apiCall}  from '../js/api'

class Layout extends React.Component {
    constructor(props) {
      super(props);
    
      this.state={
        title: "1",
        user:"loading"
        
        }
    }


    chageTitle(title){
this.setState({title})

    }



    getuser(pageNum){
    
        const API_ENDPOINT = `https://api.github.com/search/users?q=${pageNum}`
        console.log(API_ENDPOINT);
        fetch(API_ENDPOINT).then((response) => {
          return response.json().then((json) => {
            console.log(json);
            const data = json.items.map((user)=>{
             
               
                return  `${user.login}` 

            })
            
            this.setState({user:data});
          })
        })


    }
   









    
    
    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                    {this.state.title} 
                </div>
                <div className="row">
                    <Home title={this.state.title}  chageTitle={this.chageTitle.bind(this)} getuser={this.getuser.bind(this)}/>
                    <Title user={this.state.user}  />
                    <div className="col-xs-10 col-xs-offset-1">
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;

