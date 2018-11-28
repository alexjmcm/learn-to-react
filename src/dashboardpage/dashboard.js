import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container"
import "./style.css";
import image from "../components/images/dashboard-bg.png"

function Dashboard() {
  return (
    <div>
      
      <Container style={{ marginTop: 30 }}>
      <Link
              to="/Lesson"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
             Lesson
             <div class="circle-tile ">
                    <a href="#">
                        <div class="circle-tile-heading blue"><i class="fa fa-users fa-fw fa-3x"></i></div>
                    </a>
                    <div class="circle-tile-content blue">
                        <div class="circle-tile-description text-faded"> Lessons</div>
                    </div>
                </div>
            </Link>

            <Link
              to="/Result"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Result
              <div class="circle-tile ">
                    <a href="#">
                        <div class="circle-tile-heading red"><i class="fa fa-users fa-fw fa-3x"></i></div>
                    </a>
                    <div class="circle-tile-content red">
                        <div class="circle-tile-description text-faded"> Result</div>
                    </div>
    
                </div>
            </Link>
     

             <img className="large-image" src={image}></img>     
       
      </Container>
       </div>
   
  
  );
}


export default Dashboard;