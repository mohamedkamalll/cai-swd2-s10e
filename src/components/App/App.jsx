import React,{useState} from "react";
import Counter from '../Counter/Counter'
import CounterWithState from "../CounterWithState/CounterWithState";
import User from '../User/User'
import Form from "../Form/Form";


const App = () => {
     const [users,setUsers] = useState([
          {name:"Mohamed",age:24,city:"cairo",edu:"cs",id:3},
          {name:"Mario",age:19,city:"Alex",edu:"dfvsfsed",id:4},
          {name:"Mariam",age:22,city:"cairo",edu:"IS",id:1},
          {name:"Mariam",age:25,city:"qena",edu:"CS",id:12},
          {name:"Nora",age:20,city:"cairo",edu:"cs",id:2}])
     let name = "mohamed"
     const addUser = (newUser) =>{

          console.log(users)
          //users.push(newUser)
          setUsers([...users,newUser])
          console.log(users)
     }
     return (  
     <div>
{/*           <h1>Hello World</h1>
          <p>{name}</p>
          <Counter />
          <h1>Counter with state</h1>
          <CounterWithState /> */}

          <User users ={users}/>
          <Form add = {addUser}/>
     </div>
     )
}


export default App;

