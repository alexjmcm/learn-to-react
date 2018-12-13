import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { Player } from "video-react";
import "./style.css"
import { Panel} from "react-bootstrap"
import YouTube from 'react-youtube';


function Page1() {




  return (
      <div className = "Page1">
      
        <Container style={{ marginTop: 30 }}>

        <Panel><Panel.Heading>
        <Panel.Title componentClass="h1"><p> Lesson Plan Page 1 - Introduction</p></Panel.Title>
          </Panel.Heading></Panel>
        <Panel>
          <Panel.Heading>
 
    <Panel.Title componentClass="h2"><p> Section 1 - How to Create a Github Repository</p></Panel.Title>
  </Panel.Heading>
  <Panel.Body><article>
        
          <p> Go to www.github.com and login to your github acccount (or sign up). After login in you can click on "create repository" button</p>
          <p> On the field "Repository Name" Name your repository (Example: clickygame). Click on the checkbox: "Initialize this repository with a README" and then click on the button "Create repository"
          </p>   
       
          <YouTube
        videoId="senbTLxzsSY"
   
      />
    );
  }



       
        
          <Player fluid={false} width={200}>
          {/* <Player fluid={false}> */}
          <source src="http://webm.land/media/4X2L.webm" />
       
          </Player>
        
      

          </article></Panel.Body>
</Panel>
       
<Panel>
          <Panel.Heading>
    <Panel.Title componentClass="h2"> <p> Section 2 - How to Clone a Github Repository Into Your Local Computer</p></Panel.Title>
  </Panel.Heading>
  <Panel.Body><article>
       
         <p> Now that you have your repository you should clone it to your own computer, you do that by:
           1 - Clicking on the button "Clone or Download" and copying the link.
           2 - Go to the terminal and in the location that you want to clone the repository do "git clone [link]" (After doing that you should have the clickygame repository in your computer).
         </p>
         <Player>
         <source src="http://webm.land/media/CN9u.webm" />
         </Player>

         </article></Panel.Body>
</Panel>
        
          <Panel>
          <Panel.Heading>
    <Panel.Title componentClass="h2"> <p> Section 3 - How to create a react-app in the recently create local repository</p></Panel.Title>
  </Panel.Heading>
  <Panel.Body> <article>
       
         <p>We will use npm to install the create-react-app command line interface (CLI) globally (-g).
         Open up your terminal and run "npm install -g create-react-app"</p>
         <p> Now that you have the CLI available for use, navigate to the parent directory that you would like to place the application within. Then, run "create-react-app clicklygame" </p>
         <p> Run "Yarn Start" to start running the application</p>
         <Player>
         <source src="http://webm.land/media/CN9u.webm" />
         </Player>
         </article></Panel.Body>
</Panel>
       
              <div>  <Link
                to="Page2"
                className={
                  window.location.pathname === "lesson/Page2"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Go back to Lesson Page 2
              </Link>    </div>
       
        </Container>
         </div>
    
    );
  }

export default Page1;

               


              







