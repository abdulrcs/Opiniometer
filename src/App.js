import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import ChartTest from "./ChartTest";
function App() {
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
    <div class="parent">
      <main>
        <h1>Opiniometer</h1>
        <p>Analyze an opinion on specific topic in Twitter!</p>
        <form class="form" onSubmit={handleSubmit}>
          <input type="text" value={query} onChange={handleChange}></input>
          <input type="submit" value="submit" />
        </form>
        <ChartTest results={result} />
      </main>
    </div>
  );
}

export default App;
