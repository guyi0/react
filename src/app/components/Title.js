import React from 'react';

class Title extends React.Component {
    
    render() {

        if(Array.isArray(this.props.user)){
var ptag =this.props.user.map((ps)=>{

    return <li>{ps}</li>




})
        }else{
            ptag=""  
        }
         
        console.log(this.props.user);
        return (

            <div>
<ul>
{ptag}

</ul>

            </div>
        );
    }
}

export default Title;
