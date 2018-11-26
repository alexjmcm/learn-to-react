import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown, MenuItem} from "react-bootstrap"
import "./style.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     
      <Link className="navbar-brand" to="/dashboard">
      <a href="/dashboard"><img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" weign="40" height="40"/></a>
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
            <MenuItem eventKey={4.1}>Page 1</MenuItem>
            <MenuItem eventKey={4.2}>Page 2</MenuItem>
            <MenuItem eventKey={4.3}>Page 3</MenuItem>
            <MenuItem eventKey={4.4}>Page 4</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={4.4}>Lesson</MenuItem>
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
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;

