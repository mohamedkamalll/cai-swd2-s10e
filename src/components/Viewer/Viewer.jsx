import React from "react";

const Viewer = (props) =>{
     console.log(props.i)
     return (
          <p id = {props.i}>{props.c}</p>
     )
}

export default Viewer;