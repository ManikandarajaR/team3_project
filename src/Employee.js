import React,{Component} from 'react'


class Employee extends Component {
     render() {
          return (
               <div>
                    <h1>Hello,{this.props.name}</h1>
                    <h2>Your Emp id : {this.props.id}</h2>
                    
               </div>
          )
     }
}

export default Employee

/*import React from "react";

function Employee(props){
     return (
          <div>
               <h1>Hello,{props.name}</h1>
               <h2>Your Emp id : {props.id}</h2>
          </div>
          
     )


}

*/

