import React, { useState, useEffect, useRef } from "react";
import Main from "./Main";
import About from "./About";
import Results from "./Results";
import Footer from "./Footer";
import Loading from "./Loading";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [isMounted, setMounted] = useState(false);
  const [result, setData] = useState([]);
  const [check, setCheck] = useState("");

  useEffect(() => {
    setTimeout(() => setMounted(true), 1500);
  }, []);

  return (
    <Router>
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
