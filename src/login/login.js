import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import "./style.css"
import image from "../components/images/login-bg.png"

function Login() {
  return (
    <div>
      
      <Container style={{ marginTop: 30 }}>
      
      <div className="field">
        <label className="label">Username</label>
        <div className="control">
          <input className="input" type="username" placeholder="e.g Alex Smith">
          </input>
        </div>
        </div>
      
        <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input className="input" type="password" ></input>
        </div>
        </div>

        <div class="control">
        <button class=" button submit is-info">Submit</button>
        </div>
        <img className="large-image" src={image}></img>
       
      </Container>
       </div>
    
  );
}


export default Login;