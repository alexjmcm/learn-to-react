import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import "./style.css"
import { Panel} from "react-bootstrap"
import Navbar from "../components/Navbar";
import YouTube from 'react-youtube';


function Page3() {
return (
  <div className = "Page1">
 <Navbar />
    <Container style={{ marginTop: 30 }}>
    <Panel><Panel.Heading>
    <Panel.Title componentClass="h1"><p> Lesson Plan Page 3 - How to Create the Functions for the clicky-game</p></Panel.Title>
      </Panel.Heading></Panel>
    <Panel>
      <Panel.Heading>
<Panel.Title componentClass="h2"><p> Section 1 - How to create the cards.json file </p></Panel.Title>
</Panel.Heading>
<Panel.Body><article>
   
      <p> 1 - On the "src" folder create the card.json file. </p>
      <p> 2 - On the card.json file insert an object that contain an array with the following properties: "id", "name", "image" and "count".</p>
      <p> 3 - And now just follow the video instructions below to populate the Cards properties with the information that you want.</p>
  
   
      <YouTube videoId="kpFVXEV1z5g" />
   
 
      </article></Panel.Body>
</Panel>
  
<Panel>
      <Panel.Heading>
<Panel.Title componentClass="h2"> <p> Section 2 - How to Create the Render Function </p></Panel.Title>
</Panel.Heading>
<Panel.Body><article>
  
      <p> 1 - You will create a render function to render all the cards using the Card, Header and Wrapper Components and the card.json file.</p>
      <p> 2 - And now just follow the video instructions below to start creating the render function.</p>
      <YouTube videoId="bwWDR36MP8o" />
     </article></Panel.Body>
</Panel>
   
      <Panel>
      <Panel.Heading>
<Panel.Title componentClass="h2"> <p> Section 3 - How to Create the clickCount Function</p></Panel.Title>
</Panel.Heading>
<Panel.Body> <article>
  
      <p> 1 - You will create a clickCount function that will be responsible for counting the clicks.</p>
      <p> 2 - And now just follow the video instructions below to start creating the clickCount function.</p>
      <YouTube videoId="e4bdqs1GPWc" />
     </article></Panel.Body>
</Panel>


<Panel>
      <Panel.Heading>
<Panel.Title componentClass="h2"> <p> Section 4 - How to Create the gameOver Function</p></Panel.Title>
</Panel.Heading>
<Panel.Body> <article>
  
      <p> 1 - You will create a gameOver function that will be responsible for finishing the game, sending a game over alert and reset the game.</p>
      <p> 2 - And now just follow the video instructions below to start creating the gameOver function.</p>
      <YouTube videoId="1Bw752AePSg" />
     </article></Panel.Body>
</Panel>





              <div>  <Link
                to="../Result"
                className={
                  window.location.pathname === "../Result"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Go to Result
              </Link>    </div>
       
        </Container>
         </div>
    
    );
  }

export default Page3;





