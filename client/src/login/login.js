import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Container from "../components/Container";
import { Panel} from "react-bootstrap"
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
               </Link>   
     </div>

   

 <div className = "Page1">
      
       <Container style={{ marginTop: 30 }}>

       <Panel><Panel.Heading>
       <Panel.Title componentClass="h1"><p> Learn-to-React Project Challenge: Clicky Game</p></Panel.Title>
         </Panel.Heading></Panel>
       <Panel>
         <Panel.Heading>
    <Panel.Title componentClass="h2"><p> How to Create a Clicky-Game React App - STEP BY STEP (Login to see the tutorial)</p></Panel.Title>
 </Panel.Heading>
 <Panel.Body><article>
       
         <p> For this project, you'll create a memory game with React. This project will require you to break up your application's UI into components, manage component state, and respond to user events.</p>
         <p> Requirements:</p>
         <p> 1 - The application should render different images (of your choice) to the screen. </p>
         <p> 2 - Each image should listen for click events.</p>
         <p> 3 - The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time.</p>
         <p> 4 - The user's score should be reset to 0 if they click the same image more than once. </p>
         <p> 5 - Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.</p>
         <p> 6 - Once the user's score is reset after an incorrect guess, the game should restart. </p>

      
      
     

         </article></Panel.Body>
</Panel>      
  
      
       </Container>
        </div>







     </div>




   );
 }
}

export default login;


