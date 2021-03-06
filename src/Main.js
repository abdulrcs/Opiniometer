import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import ChartTest from "./ChartTest";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Main() {
  const [query, setQuery] = useState("");
  const [check, setCheck] = useState("");
  const [result, setData] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const callApi = async () => {
    if (query.length > 1) {
      const res = await fetch("https://analysis.abdulrcs.repl.co/api/" + query);
      const resText = await res.text();
      const json = await JSON.parse(resText);
      setData(Object.entries(json).map((e) => e[1]));
    } else {
      alert("Type your query before submitting!");
    }
  };

  const handleSubmit = (e) => {
    setCheck(query);
    callApi();
    console.log(result);
    e.preventDefault();
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
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.668 0.427254C19.9112 0.683516 19.9936 1.06392 19.88 1.40599L13.6125 20.2739C13.4912 20.639 13.1707 20.8891 12.8039 20.9049C12.4371 20.9206 12.0983 20.6989 11.9492 20.3454L8.50771 12.1864L0.764254 8.5602C0.428784 8.4031 0.21832 8.04614 0.233285 7.65965C0.24825 7.27316 0.485611 6.93546 0.832111 6.80768L18.7391 0.203903C19.0637 0.0841812 19.4248 0.170992 19.668 0.427254ZM10.254 11.6806L12.6684 17.4046L16.8937 4.68461L10.254 11.6806ZM15.6275 3.35044L3.55525 7.80245L8.98774 10.3465L15.6275 3.35044Z"
                fill="black"
              />
            </svg>
          </form>
        </div>
        {/* <ChartTest results={result} /> */}
      </main>
    </motion.div>
  );
}

export default Main;
