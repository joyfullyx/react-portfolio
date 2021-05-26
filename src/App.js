import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/work" component={Work} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
