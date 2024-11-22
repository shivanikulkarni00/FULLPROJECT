import React, { useState } from "react";
import Left from "./Left";
import Right from "./Right";

export default function Parent() {
    var [category, setcategory] = useState();
    function parentfunc(data) { 
        console.log("Parent function called",data);
        setcategory(data);
    }
  return (
    <div className="container">
      <h1>State Lift</h1>
      <div className="row">
        <div className="col-3">
          <Left p1={parentfunc} />
        </div>
        <div className="col-9">
          <Right p2={category} />
        </div>
      </div>
    </div>
  );
}
