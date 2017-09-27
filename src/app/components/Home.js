import React from 'react';

class Home extends React.Component {

    handleChage(e){
const title = e.target.value
   this.props.chageTitle(title)



    }





    render() {
        console.log(this.props);
        return (

            <div>
<input value={this.props.title} type="text" onChange={this.handleChage.bind(this)}/>
{this.props.title}

            </div>
        );
    }
}

export default Home;
