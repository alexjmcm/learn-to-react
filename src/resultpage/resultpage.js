import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import "./style.css"
import image from "../components/images/resultpage-bg.png"

function Result() {
  return (
    <div className = "Result">
      
      <Container style={{ marginTop: 30 }}>
      
        <p> Congratulations you have completed the project successfully.

            Please refer to the suggested todo projects below:</p>
            <div>  <Link

              to="/lesson/Page1"
              className={
                window.location.pathname === "/lesson/Page1"
              }
              to="/lesson"
              className={
                window.location.pathname === "/lesson"

                  ? "nav-link active"
                  : "nav-link"
              }
            >

              Go back to Lesson Page
              
               </Link>    </div>

<Container style={{ marginTop: 30 }}>

<p>Websites to provide additional help:</p>
<p><a href="https://www.freecodecamp.org/"> freeCodeCamp </a></p>

<p><a href="https://www.w3schools.com/whatis/whatis_react.asp"> w3schools </a></p>

<p><a href="https://reactjs.org/tutorial/tutorial.html"> Tutorial: Intro to React </a></p>

<p><a href="https://www.youtube.com/watch?v=MhkGQAoc7bc"> REACT JS TUTORIAL #1 - Reactjs Javascript Introduction & Workspace Setup </a></p>

<p><a href="https://www.youtube.com/watch?v=fd2Cayhez58"> REACT JS TUTORIAL #2 - Reactjs Javascript Introduction & Workspace Setup </a></p>

</Container>

      <img className="large-image" src={image}></img>

        
                   
            
 
      </Container>
       </div>
  
  
  );
}


export default Result;


