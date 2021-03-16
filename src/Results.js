import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ChartResult from "./ChartResult";
import Loading from "./Loading";
import "./styles/App.css";

function Results({ check }) {
  const [showChart, setShowChart] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    const callApi = async () => {
      const res = await fetch("https://analysis.abdulrcs.repl.co/api/" + check);
      const resText = await res.text();
      const json = await JSON.parse(resText);
      await setResult(json);
      await setShowChart(true);
    };

    callApi();
  }, [check]);

  return (
    <>
      {showChart ? (
        <motion.div
          class="result"
          initial={{ opacity: 0, y: "30%" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ opacity: 0, y: "30%" }}
        >
          <div class="resultheader">
            <h1>Opiniometer</h1>
            <p>
              Here's what the people think about <br />
              {check.length > 25 ? "that topic" : check}
            </p>
          </div>
          <ChartResult result={result} />
          <Link to="/">
            <div class="back">
              <p>Try Another Topic</p>
            </div>
          </Link>
          <Link
            to={{
              pathname: `/tweets`,
              state: { result },
            }}
          >
            <div class="back">
              <p>Tweets</p>
            </div>
          </Link>
        </motion.div>
      ) : (
        <Loading />
      )}
      <footer>
        <div class="name">
          <img src="./assets/github.svg" />
          <p>abdulrcs</p>
        </div>
      </footer>
    </>
  );
}

export default Results;
