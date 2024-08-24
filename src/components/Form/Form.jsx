import React from "react";

const Form =({add}) =>{
     let newUser = {
          name:null,
          age:null,
          city:null,
          edu:null
     }

     const nameHandler = (e)=>{
          newUser.name = e.target.value
          console.log(newUser)
     }
     const ageHandler = (e) =>{
          newUser.age = e.target.value;
          console.log(newUser)
     }

     const inputHandler = (e) =>{
          console.log(e.target.id)
          newUser[e.target.id] = e.target.value
          console.log(newUser)
     }

     const submitHandler = (e) =>{
          e.preventDefault()
          add(newUser)
     }
     return (
          <form onSubmit={submitHandler}>
               <input type="text" id="name" placeholder="Enter your name" onChange={nameHandler}/><br />
               <input type="text" id="age" placeholder="Enter your age" onChange={ageHandler}/><br />
               <input type="text" id="city" placeholder="Enter your city" onChange={inputHandler}/><br />
               <input type="text" id="edu" placeholder="Enter your edu" onClick={inputHandler}/><br />
               <input type="submit" />
          </form>
     )
}


export default Form;