import React, { useState, useEffect, useRef } from "react";
import About from "./About";
import Main from "./Main";
import "./App.css";
import ChartTest from "./ChartTest";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div class="parent">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
