//import React from "react";
//import { Link } from "react-router-dom";
//import Container from "../components/Container";
//import "./style.css"
//import image from "../components/"


import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";

class Register extends Component {
  // Setting the component's initial state
  state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
    
  };
  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    API.getUser()
      .then(res =>
        this.setState({ user: res.data, name: "", email: "", password: "", password_confirmation:"" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value} = event.target;
 this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event =>{
    event.preventDefault();
    
if (!this.state.name === "" || !this.state.email === "" || !this.state.password === "" || !this.state.password_confirmation === "" ) {
        alert("sorry, you must enter all fields")
        
      } else if(this.state.password === this.state.password_confirmation) { 
       API.saveUser({
           name:this.state.name,
           email:this.state.email,
           password:this.state.password,
           //password_confirmation:this.state.password_confirmation
       })
       .then (res => this.loadUser())
       .catch(err => console.log(err));
         }       
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
            type="text"
            placeholder="name"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
           <input
            value={this.state.password_confirmation}
            name="password_confirmation"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password Confirmation"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
          </form>

      </div>
    );
  }
}

export default Register;


