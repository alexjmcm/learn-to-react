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
            Please refer to the suggested todo projects below</p>
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

      <img className="large-image" src={image}></img>
         
      </Container>
       </div>
    
  );
}


export default Result;

