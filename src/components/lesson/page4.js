import React from "react";
import Container from "../../components/Container";
import { Link } from "react-router-dom";

function Page4() {
    return (
        <div>
          
          <Container style={{ marginTop: 30 }}>
          
            <p> Lesson Plan Page 4</p>
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