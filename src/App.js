import React, { useState, useEffect } from "react";
import Main from "./Main";
import About from "./About";
import Results from "./Results";
import Loading from "./Loading";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./styles/App.css";

function App() {
  const [isMounted, setMounted] = useState(false);
  const [check, setCheck] = useState("");

  useEffect(() => {
    setTimeout(() => setMounted(true), 1500);
  }, []);

  return (
    <Router basename="/">
      <div class="parent">
        <AnimatePresence>
          <Switch>
            <Route
              path="/"
              exact
              component={
                isMounted ? () => <Main setCheck={setCheck} /> : Loading
              }
            />
            <Route path="/about" component={About} />
            <Route path="/result" component={() => <Results check={check} />} />
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
