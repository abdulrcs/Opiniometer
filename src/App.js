import React, { useState, useEffect } from "react";
import Main from "./Main";
import About from "./About";
import Results from "./Results";
import Loading from "./Loading";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./styles/App.css";

function App() {
  const [isMounted, setMounted] = useState(false);
  const [result, setData] = useState({});
  const [check, setCheck] = useState("");

  useEffect(() => {
    setTimeout(() => setMounted(true), 1500);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div class="parent">
        <AnimatePresence>
          <Switch>
            <Route
              path="/"
              exact
              component={
                isMounted
                  ? () => (
                      <Main
                        result={result}
                        setData={setData}
                        check={check}
                        setCheck={setCheck}
                      />
                    )
                  : Loading
              }
            />
            <Route path="/about" component={About} />
            <Route
              path="/result"
              component={() => <Results result={result} check={check} />}
            />
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
