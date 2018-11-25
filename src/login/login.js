import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";



function Login() {
  return (
    <div>
      
      <Container style={{ marginTop: 30 }}>
      
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input class="input" type="username" placeholder="e.g Alex Smith">
          </input>
        </div>
        </div>
      
        <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" ></input>
        </div>
        </div>

        <div class="control">
        <button class="button is-info">Submit</button>
        </div>

       
      </Container>
       </div>
    
  );
}


export default Login;