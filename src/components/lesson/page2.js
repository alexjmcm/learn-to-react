import React from "react";
import Container from "../../components/Container";
import { Link } from "react-router-dom";






function Page2() {
    return (
        <div>
          
          <Container style={{ marginTop: 30 }}>
          
            <p> Lesson Plan Page 2</p>
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