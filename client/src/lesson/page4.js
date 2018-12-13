import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Page4() {
    return (
        <div>
          <Navbar />
          <Container style={{ marginTop: 30 }}>
          
            <p> Lesson Plan Page 4</p>

 <article>
              <p> Stage 4 - Deployment on Github and Heroku</p>
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

                <div>  <Link
                  to="/Result"
                  className={
                    window.location.pathname === "/Result"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Go to Result Page 
                </Link>    </div>
           
          </Container>
           </div>
        
      );
    }

export default Page4;

