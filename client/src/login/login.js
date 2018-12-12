import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import API from "../utils/API";
//import Register from "./register";


class login extends Component {
  // Setting the component's initial state
  state = {
    name: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // if (!this.state.name) {
    //   alert("Fill out your  name please!");
    // }  else {
    //   alert(`Hello ${this.state.name}`);
    // }
API.login (
  {
    email: this.state.name,
   password: this.state.password
  }
).then(res=>{
console.log(res)
    this.props.history.push('/dashboard')


})

  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
       
        <form className="form">
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="email"
            placeholder="name"
          />
          
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
       


			<div>  <Link
                  to="Register"
                  className={
                    window.location.pathname === "/Register"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Register For The Learn To React App!
                </Link>    </div>
      </div>
    );
  }
}

export default login;
