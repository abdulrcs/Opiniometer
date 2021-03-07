import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import ChartTest from "./ChartTest";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./Footer";

function Main({ result, setData, check, setCheck }) {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const callApi = async () => {
    if (query.length > 1) {
      const res = await fetch("https://analysis.abdulrcs.repl.co/api/" + query);
      const resText = await res.text();
      const json = await JSON.parse(resText);
      await setData(Object.entries(json).map((e) => e[1]));
    } else {
      alert("Type your query before submitting!");
    }
  };

  const upperWord = (word) => {
    let splitted = word.split(" ");
    let upperCase = splitted.map((e) => e[0].toUpperCase() + e.substring(1));
    return upperCase.join(" ");
  };

  const handleSubmit = (e) => {
    setCheck(upperWord(query));
    callApi();
    console.log(result);
    e.preventDefault();
    history.push("/result");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: "30%" }}
      animate={{ opacity: 1, y: "0" }}
      exit={{ opacity: 0, y: "30%" }}
    >
      <main>
        <div class="section1">
          <h1>Opiniometer</h1>
          <p>
            Analyze an opinion on specific
            <br />
            topic based on twitter posts!
          </p>
          <form class="form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Insert a Topic"
              value={query}
              onChange={handleChange}
            ></input>
            <Link to="/result">
              <img src="submit.svg" onClick={handleSubmit} alt="Submit" />
            </Link>
          </form>
        </div>
        {/* <ChartTest results={result} /> */}
      </main>
    </motion.div>
  );
}

export default Main;
