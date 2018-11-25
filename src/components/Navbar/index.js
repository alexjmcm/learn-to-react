import React from "react";
import { Link } from "react-router-dom";
import {Menu, Dropdown} from "semantic-ui-react"
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
          <li className="nav-item navbar-item has-dropdown">
            <Link
              to="/lesson"
              className={window.location.pathname === "/lesson" ? "nav-link active" : "nav-link"}
            >
          <Menu>
             <Dropdown.Menu>

<Dropdown.Item>Lesson 1</Dropdown.Item>
<Dropdown.Item>Lesson 2</Dropdown.Item>
<Dropdown.Item>Lesson 3</Dropdown.Item>
<Dropdown.Item>Lesson 4</Dropdown.Item>
             </Dropdown.Menu>
         
     </Menu>
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

