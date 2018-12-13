import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown, MenuItem} from "react-bootstrap"
import "./style.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
 return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
   
     <Link className="navbar-brand" to="/dashboard">
     <a href="/dashboard"><img className="logo" src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt = "logo" /></a>
     </Link>
    
     <div>
       <ul className="navbar-nav">
         <li className="nav-item">
           <Link
             to="/dashboard"
             className={
                window.location.pathname === "/dashboard"
                 ? "nav-link active"
                 : "nav-link"
             }
           >
           Dashboard
           </Link>
         </li>
         <li >
         <Link
             to="/lesson"
             className={
                window.location.pathname === "/lesson"
                 ? "nav-link active"
                 : "nav-link"
             }
           >
           <NavDropdown eventKey={4} title="Lesson" href = "/lesson" id="basic-nav-dropdown">
           <MenuItem eventKey={4.1}>
           <Link
             to="lesson/Page1"
             className={
                window.location.pathname === "/lesson/Page1"
                 ? "nav-link active"
                 : "nav-link"
             }
           >
           Page 1
           </Link>
           </MenuItem>
           <MenuItem eventKey={4.2}>
           <Link
             to="lesson/Page2"
             className={
                window.location.pathname === "/lesson/Page2"
                 ? "nav-link active"
                 : "nav-link"
             }
           >
           Page 2
           </Link>
           </MenuItem>
           <MenuItem eventKey={4.3}>
           <Link
             to="lesson/Page3"
             className={
                window.location.pathname === "/lesson/Page3"
                 ? "nav-link active"
                 : "nav-link"
             }
           >
           Page 3
           </Link>
         
          
           </MenuItem>
           <MenuItem divider />
           <MenuItem eventKey={4.4}>
           <Link
             to="/lesson"
             className={
                window.location.pathname === "/lesson"
                 ? "nav-link active"
                 : "nav-link"
             }
           >
           Lesson
           </Link>


           </MenuItem>
         </NavDropdown>
          </Link>
         
         </li>
         <li className="nav-item">
           <Link
             to="/result"
             className={window.location.pathname === "/result" ? "nav-link active" : "nav-link"}
           >
             Result
           </Link>

                    

<Link
  to="/"
  className={
     window.location.pathname === "/"
      ? "nav-link active"
      : "nav-link"
  }
>
Logout
</Link>
</li>
</ul>
</div>
</nav>
);
}
       

export default Navbar;



