import React from 'react';

class Class4 extends React.Component {
    constructor() { 
        super();
        this.state = {
            apiData: [],
        };
    }
    componentDidMount() {
       fetch("http://localhost:9000/users")
         .then((res) => res.json())
         .then((value) => {
             console.log(value);
             this.setState({ apiData: value });
         });
     }
    render() { 
        var result = this.state.apiData;
        return (
            <div className="container">
                <h1>Fetch data from node JS</h1>
                <table className='table'>
                    
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Place</th>
                        </tr>
                
                          { result && result.length > 0 && result.map(
                            (value) => (
                                <tr>
                                    <td>{value.name}</td>
                                    <td>{value.age}</td>
                                    <td>{value.place}</td>
                                </tr >
                                      ))
                            }
                
                </table>
            </div>
        );
    }
}
export default Class4;