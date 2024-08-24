import React from "react";

const User = (props) =>{
     console.log(props.user)
     return (
     <div style={{backgroundColor :"gray"}}>
          <div>Name :{props.user.name}</div>
          <div>Age : {props.user.age}</div>
          <div>City :{props.user.city}</div>
          <div>Edu :{props.user.edu}</div>
     </div>)
}

export default User;