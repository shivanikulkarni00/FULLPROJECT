import React, { useEffect, useState } from 'react'

export default function Register() {
  var [count, setcount] = useState(100);
  var [name, setname] = useState("Ashutosh");
  // useEffect(() => { 
  //   console.log("useEffect",count,name); 
  // })
  //useEffect with empty array then its called only once
    // useEffect(() => {
    //   console.log("useEffect", count, name);
    // },[]);
    //this is useEffect with conditional variable i.e. name 
    useEffect(() => {
      console.log("useEffect", count, name);
      return () => { 
        console.log("In leaving");
        
      }
    }, []);
  
  function f1() { 
    // alert("Register");
    setcount(count + 100);

  }
  function f2() { 
    // alert("Register");
    // setname("Panesh");
    setname("💕💕💕");
  }
  return (
    <div className="container">
      <h1>State Variable</h1>
      <p>{count}</p>
      <button onClick={f1}>Submit</button>
      <p>{name}</p>
      <button onClick={f2}>Change</button>
    </div>
  );
}
