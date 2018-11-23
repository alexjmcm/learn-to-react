import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Result from "./resultpage/resultpage";

import Page1 from "./components/lesson/page1";
import Page2 from "./components/lesson/page2";
import Page3 from "./components/lesson/page3";
import Page4 from "./components/lesson/page4";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/Result" component={Result} />

          <Route exact path="/lesson/Page1" component={Page1} />
          <Route exact path="/lesson/Page2" component={Page2} />
          <Route exact path="/lesson/Page3" component={Page3} />
          <Route exact path="/lesson/Page4" component={Page4} />

        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


