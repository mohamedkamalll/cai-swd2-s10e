import React from "react";
import Counter from '../Counter/Counter'
import CounterWithState from "../CounterWithState/CounterWithState";
import User from '../User/User'

const user = {
     name:"Mohamed",
     age:"24",
     city:"Cairo",
     edu:"cs"
}
const App = () => {
     let name = "mohamed"

     return (  
     <div>
{/*           <h1>Hello World</h1>
          <p>{name}</p>
          <Counter />
          <h1>Counter with state</h1>
          <CounterWithState /> */}

          <User user ={user}/>
     </div>
     )
}


export default App;

