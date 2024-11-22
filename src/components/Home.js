import React, { useEffect, useState } from 'react'

export default function Home() {
  var [data, setData] = useState([]);
  useEffect(() => { 
    fetch("http://localhost:9000/users")
      .then((res) => res.json())
      .then((value) => {
        console.log(value); 
        setData(value);
      });
    
}, []);

  return (
    <div className="container">
      <h1>Show User</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Place</th>
          </tr>
        </thead>
        <tbody>
          { 
            data && data.length > 0 && data.map((record,i) => 
              <tr>
                <th>{i+1  }</th>
                <td>{record.name}</td>
                <td>{record.age}</td>
                <td>{record.place}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}
