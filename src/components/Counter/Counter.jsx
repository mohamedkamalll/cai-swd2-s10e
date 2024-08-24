import React from "react";
import Viewer from "../Viewer/Viewer";
const Counter = () =>{
     let Counter = 0

     const inputHandler = () => {
          console.log("Clicked")
          Counter += 1;
          console.log("new counter",Counter)
          document.getElementById("p1").innerHTML = Counter
          document.getElementById("p2").innerHTML = Counter
          document.getElementById("p3").innerHTML = Counter
     }
     return (     
          <div>
               <input 
               type="Button" 
               value="Counter" 
               onClick={ inputHandler}
               />

               <Viewer c = {Counter} i = {"p1"}/>
               <Viewer c = {Counter} i = {"p2"}/>
               <Viewer c = {Counter} i = {"p3"}/>
          </div>
     )
}

export default Counter ;