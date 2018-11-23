import React from "react";
import Container from "../../components/Container";
import { Link } from "react-router-dom";






function Page3() {
    return (
        <div>
          
          <Container style={{ marginTop: 30 }}>
          
            <p> Lesson Plan Page 3</p>
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