import React from "react";
//import ReactDOM from "react-dom";
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.UpdateName = this.UpdateName.bind(this);
    this.testClick = this.testClick.bind(this);
  }
  UpdateName = (e) => {
    this.setState({ name: e.target.value });
  };
  testClick = (e) => {
    alert("The name entered is: " + this.state.name);
  };

  componentDidMount() {
    console.log("Mounting State : calling method componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Update  State : calling method shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("Update  State : calling method componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("UnMounting State : calling method componentWillUnmount");
  }

  render() {
    return (
      <form>
        Enter Your Name:
        <input type="text" value={this.state.name} onChange={this.UpdateName} />
        <br></br>
        <h2 style={{ color: "red" }}>{this.state.name}</h2>
        <input type="button" value="Click Me" onClick={this.testClick} />
      </form>
    );
  }
}
export default Test;
