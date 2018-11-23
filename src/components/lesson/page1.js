import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";

function Page1() {
    return (
        <div>
          
          <Container style={{ marginTop: 30 }}>
          
            <p> Lesson Plan Page</p>
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