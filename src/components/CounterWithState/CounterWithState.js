import React ,{useState}from "react";
//import { useState } from "react";

const CounterWithState = () =>{
     //let counter = 0 counter =  counter + 1

     const [counter,setCounter] = useState(0)
     const [bgColor,setBgColor] = useState("gray")
     const [isGray,setIsGray] = useState(false)

     const inputHandler = () =>{
        //  counter += 1 lw variable n3ml keda
        setCounter(counter + 1)  //Counter = Counter + 1(Counter += 1)mutation  
        //              Counter + 1
     }

     const colorHandler = () =>{
          // if(bgColor === "gray"){
          //      setBgColor("white")
          // }else{
          //      setBgColor("gray")
          // }
          setIsGray(!isGray)
     }

     return (
          <div style= {{backgroundColor: isGray ? "gray" : "white"}}>
               <input 
                    type="Button"
                    value="Counter with state"
                    onClick={inputHandler}
               />
               <input type="button" value="switch" onClick={colorHandler}/>
               <p >{counter}</p>
               <p>{counter}</p>
          </div>
     )
}

export default CounterWithState;