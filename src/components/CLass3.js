import React from "react";
class Class3 extends React.Component {
  constructor() {
    super();
    console.log(this);
    this.state = {
      name: "Ashutosh",
      age: 26,
    };
  }
  f1() {
    this.setState({
      name: "Ashu",
    });
  }
  f2() {
    this.setState({
      age: this.state.age + 5,
    });
  }
  //did mount cycle it will be called only once on mounting
  componentDidMount() {
    console.log("did mount cycle", this.state.name, this.state.age);
    }
    componentDidUpdate() { 
        console.log("did update cycle", this.state.name, this.state.age);
        
    }
    componentWillUnmount() {
        console.log("Leaving component!");
     }
  render() {
    return (
      <div className="container">
        <h1>Life-cycle hook</h1>
        <p>{this.state.name}</p>
        <button
          onClick={() => {
            this.f1();
          }}
        >
          Change Name
        </button>
        <p>{this.state.age}</p>
        <button
          onClick={() => {
            this.f2();
          }}
        >
          Change Age
        </button>
      </div>
    );
  }
}
export default Class3;