import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import "./style.css"
import { Panel} from "react-bootstrap"

function Lesson() {
  return (
    <div>
      
      <Container style={{ marginTop: 30 }}>
      
       
            <div className = "lesson">  <Link
              to="lesson/Page1"
              className={
                 window.location.pathname === "/lesson/Page1"
                  ? "nav-link active"
                  : "nav-link"
              }
            ><Panel>
            <Panel.Heading>
      <Panel.Title componentClass="h3">Page 1</Panel.Title>
    </Panel.Heading>
    <Panel.Body><p> Section 1 - How to Create a Github Repository</p>
    <p> Section 2 - How to Clone a Github Repository Into Your Local Computer</p>
    
    <p> Section 3 - How to create a react-app in the recently create local repository (Link to a video)</p></Panel.Body>
  </Panel>
            
            </Link>
            
            <Link
              to="lesson/Page2"
              className={
                 window.location.pathname === "/lesson/Page2"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
           <Panel>
            <Panel.Heading>
      <Panel.Title componentClass="h3">Page 2</Panel.Title>
    </Panel.Heading>
    <Panel.Body>Panel content</Panel.Body>
  </Panel>
            </Link>
            <Link
              to="lesson/Page3"
              className={
                 window.location.pathname === "/lesson/Page3"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
            <Panel>
            <Panel.Heading>
      <Panel.Title componentClass="h3">Page 3</Panel.Title>
    </Panel.Heading>
    <Panel.Body>Panel content</Panel.Body>
  </Panel>
            </Link>
            <Link
              to="lesson/Page4"
              className={
                 window.location.pathname === "/lesson/Page4"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
            <Panel>
            <Panel.Heading>
      <Panel.Title componentClass="h3">Page 4</Panel.Title>
    </Panel.Heading>
    <Panel.Body>Panel content</Panel.Body>
  </Panel>
            </Link>
               </div>
       
      </Container>
       </div>
    
  );
}


export default Lesson;
