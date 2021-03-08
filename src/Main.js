import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles/App.css";

function Main({ result, setData, check, setCheck }) {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const callApi = async () => {
    if (query.length >= 1) {
      const res = await fetch("https://analysis.abdulrcs.repl.co/api/" + query);
      const resText = await res.text();
      const json = await JSON.parse(resText);
      await setData(json);
    } else {
      alert("Type your query before submitting!");
    }
  };

  const upperWord = (word) => {
    let splitted = word.trim().split(" ");
    let upperCase = splitted.map((e) => e[0].toUpperCase() + e.substring(1));
    return upperCase.join(" ");
  };

  const handleSubmit = (e) => {
    if (query !== undefined) setCheck(upperWord(query));
    callApi();
    console.log(result);
    e.preventDefault();
    history.push("/result");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "30%" }}
        animate={{ opacity: 1, y: "0" }}
        exit={{ opacity: 0, y: "30%" }}
      >
        <main>
          <div class="section1">
            <h1>Opiniometer</h1>
            <p>
              <span class="mobileText">
                Analyze an opinion on specific <br /> topic based on twitter
                posts!
              </span>
              <span class="desktopText">
                Analyze an opinion on specific topic <br /> based on twitter
                posts!
              </span>
            </p>
            <form class="form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Insert a Topic"
                value={query}
                onChange={handleChange}
              ></input>
              <Link to="/result">
                <img
                  src="./assets/submit.svg"
                  onClick={handleSubmit}
                  alt="Submit"
                />
              </Link>
            </form>
          </div>
        </main>
      </motion.div>

      <footer>
        <Link to="/about">
          <p class="detail">How it Works?</p>
        </Link>
        <div class="name">
          <img src="./assets/github.svg" />
          <p>abdulrcs</p>
        </div>
      </footer>
    </>
  );
}

export default Main;
