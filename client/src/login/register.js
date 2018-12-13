//import React from "react";
//import { Link } from "react-router-dom";
//import Container from "../components/Container";
//import "./style.css"



import React, { Component } from "react";
import "./style1.css";
import API from "../utils/API";
import image from "../components/images/login-background.jpg"
import { Panel} from "react-bootstrap"
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
       .then (res => {this.loadUser()
        this.props.history.push('/')
      }
    
      )
       .catch(err => console.log(err));
         }       
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
         <img className='bg' src={image} alt = "registerbg" />
         <Panel><Panel.Heading>
        <Panel.Title componentClass="h1" className = "title"> 
        <img className="logo" src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt = "logo" />
        
        Learn to React By Building Fun Projects </Panel.Title>
          </Panel.Heading></Panel>
        <form className="form">
        <label>Name</label>
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Name"
          />
          <label>Email</label>
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
           <label>Password</label>
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
           <label> Confirm Password</label>
           <input
            value={this.state.password_confirmation}
            name="password_confirmation"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Confirm Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
          </form>

      </div>
    );
  }
}

export default Register;


