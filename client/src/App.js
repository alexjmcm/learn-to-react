import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Result from "./resultpage/resultpage";
import Dashboard from "./dashboardpage/dashboard";
import Login from "./login/login";
import Register from "./login/register";
import Lesson from "./lesson/lesson";
import Page1 from "./lesson/page1";
import Page2 from "./lesson/page2";
import Page3 from "./lesson/page3";

import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import CodeM from "./codemirror/index";

function App() {
 return (
   <Router>
     <div>
<<<<<<< HEAD
       
       <Wrapper>
         <Route exact path="/" component={Login} />
         <Route exact path="/Register" component={Register} />
=======
     <Route exact path="/Register" component={Register} />
     <Route exact path="/" component={Login} />
       <Navbar />
       <Wrapper>   
>>>>>>> 8f22e5c6db63e232de51820bd84fcb10ce532bc6
         <Route exact path="/Result" component={Result} />
         <Route exact path="/Dashboard" component={Dashboard} />
         <Route exact path="/lesson" component={Lesson} />
         <Route exact path="/lesson/Page1" component={Page1} />
         <Route exact path="/lesson/Page2" component={Page2} />
         <Route exact path="/lesson/Page3" component={Page3} />       
         <Route exact path="/Codem" component={CodeM} />       
       </Wrapper>
       <Footer />
     </div>
   </Router>
 );
}

export default App;

