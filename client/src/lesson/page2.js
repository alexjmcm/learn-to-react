import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";


function Page2() {
    return (
        <div>
          
          <Container style={{ marginTop: 30 }}>
          
            <p> Lesson Plan Page 2</p>
            <article>
              <p> Stage 2 - Creating the React Components</p>
              <p> Description 1:</p>
              <p> "iie irure dolor in reprehenderit iugiat r siidui officia deserunt mollit anim id est laborum." </p>
           
              Video 1 - Link: <a href="https://www.youtube.com"> youtube.com</a>
          </article> 

          <article>   
                  <p> Description 2:</p>
                  <p> "Lidunt ut lm, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>


              Video 2 - Link: <a href="https://www.youtube.com"> youtube.com</a>

         </article>  

         <article>
                  <p> Description 3:</p>
                  <p> "Loreeiusmod temUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>

              Video 3 - Link: <a href="https://www.youtube.com"> youtube.com</a>
          </article>   

          <article>
                  <p> Description 4:</p>
                  <p> "Lorsadcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
              Video 4 - Link: <a href="https://www.youtube.com"> youtube.com</a>
              </article> 

          <article>
            <p> Description 5:</p>
            <p> "Lorsadcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
            Video 5 - Link: <a href="https://www.youtube.com"> youtube.com</a>
          </article>  

          <article>          
            <p> Description 6:</p>
            <p> "Lorsadcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
            Video 6 - Link: <a href="https://www.youtube.com"> youtube.com</a>
          </article>  

          <article>  
            <p> Description 7:</p>
            <p> "Lorsadcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
            Video 7 - Link: <a href="https://www.youtube.com"> youtube.com</a>
          </article> 

          <article>  
           <p> Description 8:</p>
            <p> "Lorsadcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
            Video 8 - Link: <a href="https://www.youtube.com"> youtube.com</a>
          </article> 

           <button onclick="location.href='./lesson-plan-3.html';"> Next Lesson</button>

                <div>  <Link
                  to="Page3"
                  className={
                    window.location.pathname === "lesson/Page3"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Go back to Lesson Page 3
                </Link>    </div>
           
          </Container>
           </div>
        
      );
    }

export default Page2;


