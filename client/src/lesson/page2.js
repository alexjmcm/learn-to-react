import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { Player } from "video-react";
import "./style.css";
import { Panel } from "react-bootstrap";
import Navbar from "../components/Navbar";


function Page2() {
 return (
   <div className = "Page1">
     <Navbar />
       
     <Container style={{ marginTop: 30 }}>
     
     <Panel><Panel.Heading>
     <Panel.Title componentClass="h1"><p> Lesson Plan Page 2 - How to Create Components in React</p></Panel.Title>
       </Panel.Heading></Panel>
     <Panel>
       <Panel.Heading>
 <Panel.Title componentClass="h2"><p> Section 1 - How to Create the Card Component</p></Panel.Title>
</Panel.Heading>
<Panel.Body><article>
      
       <p> 1 - Explaining Components: Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.</p>
       <p> 2 - For this Clicky-Game project you are going to create 3 components: Card, Header and Wrapper.</p>
       <p> 3 - To begin creating the components go to the "src" folder create a components folder and the on that folder create the "Card" folder, the "Header" folder and the "Wrapper" folder </p>    
       <p> 4 - On the header Folder create the index.js file, the Card.js file and the Card.css file. </p>
       <p> 5 - And now just follow the video instructions below to start coding on those files.</p>
     
      
       <Player>
       <source src="http://webm.land/media/r8LV.webm" />
       </Player>
      
    

       </article></Panel.Body>
</Panel>
     
<Panel>
       <Panel.Heading>
 <Panel.Title componentClass="h2"> <p> Section 2 - How to Create the Header Component</p></Panel.Title>
</Panel.Heading>
<Panel.Body><article>
     
       <p> 1 - On the header Folder create the index.js file, the Header.js file and the Header.css file. </p>
       <p> 2 - And now just follow the video instructions below to start coding on those files.</p>
      <Player>
      <source src="http://webm.land/media/AreT.webm" />
      </Player>

      </article></Panel.Body>
</Panel>
      
       <Panel>
       <Panel.Heading>
 <Panel.Title componentClass="h2"> <p> Section 3 - How to Create the Wrapper Component</p></Panel.Title>
</Panel.Heading>
<Panel.Body> <article>
     
       <p> 1 - On the header Folder create the index.js file, the Wapper.js file and the Wrapper.css file. </p>
       <p> 2 - And now just follow the video instructions below to start coding on those files.</p>
      <Player>
      <source src="http://webm.land/media/MxEA.webm" />
      </Player>
      </article></Panel.Body>
</Panel>

               <div>  <Link
                 to="Page3"
                 className={
                   window.location.pathname === "lesson/Page3"
                     ? "nav-link active"
                     : "nav-link"
                 }
               >
                 Go to Lesson Page 3
               </Link>    </div>
         
         </Container>
          </div>
      
     );
   }

export default Page2;



