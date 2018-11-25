import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";






function Page3() {
    return (
        <div>
          
          <Container style={{ marginTop: 30 }}>
          
            <p> Lesson Plan Page 3</p>
            <article>
              <p> Stage 3 - App.js and Routing</p>
              <p> Description 1:</p>
              <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
           
              Video 1 - Link: <a href="https://www.youtube.com"> youtube.com</a>
          </article> 
          <article>   
                  <p> Description 2:</p>
                  <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>


              Video 2 - Link: <a href="https://www.youtube.com"> youtube.com</a>


          </article> 
          <article>
                  <p> Description 3:</p>
                  <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>

              Video 3 - Link: <a href="https://www.youtube.com"> youtube.com</a>

              </article>  
              <article>
                  <p> Description 4:</p>
                  <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
              Video 4 - Link: <a href="https://www.youtube.com"> youtube.com</a>
              </article> 

 <button onclick="location.href='./lesson-plan-4.html';"> Next Lesson</button>
                <div>  <Link
                  to="Page4"
                  className={
                    window.location.pathname === "lesson/Page4"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Go back to Lesson Page 4
                </Link>    </div>
           
          </Container>
           </div>
        
      );
    }

export default Page3;
