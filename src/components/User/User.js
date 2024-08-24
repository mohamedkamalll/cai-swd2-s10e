import React from "react";

const User = (props) =>{
     console.log(props.users)

/*      let y = [45,5478,5478,2478,248,2145]
     let elements = []
     y.forEach((el)=>{
          console.log(el)
          elements.push(<div> {el}</div>)
     })
      return (
elements
     )  */
     return (
         <div style={{backgroundColor:"white"}}>
          {
               props.users.map(({name,age,city,edu})=>{
               return (<div style={{margin: "10px", backgroundColor:"gray"}}>
                    <div>Name :{name}</div>
                    <div>Age :{age}</div>
                    <div>City :{city}</div>
                    <div>Edu :{edu}</div>
               </div>)
          })
          }
         </div>
     )
}

export default User;