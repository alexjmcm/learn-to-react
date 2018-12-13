import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import "./style.css"
import image from "../components/images/resultpage-bg.png"
import Navbar from "../components/Navbar";
import { Panel} from "react-bootstrap"

function Result() {
  return (
    <div className = "Result">
     
      <Navbar />
      <Container style={{ marginTop: 30 }}>
      <Panel>
         
            <Panel.Heading>
      <Panel.Title componentClass="h1">Congratulations you have completed the project successfully.

Please refer to the suggested todo projects below:</Panel.Title>
    </Panel.Heading>
</Panel>

<Panel>
            <Panel.Heading>
      <Panel.Title componentClass="h1">Websites to provide additional help:</Panel.Title>
    </Panel.Heading>
    <Panel.Body><p><a href="https://www.freecodecamp.org/"> FreeCodeCamp </a></p>

<p><a href="https://www.w3schools.com/whatis/whatis_react.asp"> W3Schools </a></p>

<p><a href="https://reactjs.org/tutorial/tutorial.html"> Tutorial: Intro to React </a></p>

<p><a href="https://www.youtube.com/watch?v=MhkGQAoc7bc"> REACT JS TUTORIAL #1 - Reactjs Javascript Introduction & Workspace Setup </a></p>

<p><a href="https://www.youtube.com/watch?v=fd2Cayhez58"> REACT JS TUTORIAL #2 - Reactjs Javascript Introduction & Workspace Setup </a></p>
</Panel.Body></Panel>
  
  <Link

to="/lesson/Page1"
className={
  window.location.pathname === "/lesson/Page1"
}

>

  <div class="circle-tile ">
      <a href="/lesson">
          <div class="circle-tile-heading green"><i class="fa fa-arrow-left fa-fw fa-3x"></i></div>
      </a>
      <div class="circle-tile-content green">
          <div class="circle-tile-description text-faded"> Go back to Lesson Page</div>
      </div>
</div>
 </Link>   

     <div className="large-image">
                <img src={image} alt="resultpage"></img>
              </div>

        
                   
            
 
      </Container>

  </div>
  
  );
}


export default Result;


