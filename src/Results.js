import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ChartResult from "./ChartResult";
import Loading from "./Loading";
import "./styles/App.css";

function Results({ result, check }) {
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowChart(true);
    }, 1500);
  }, []);

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
