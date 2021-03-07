import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { motion } from "framer-motion";
import ChartTest from "./ChartTest";
import Loading from "./Loading";
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
            <p>{check && `Here's what the people think about ${check}:`}</p>
          </div>
          <ChartTest result={result} />
          <Link to="/">
            <div class="back">
              <p>Try Another Topic</p>
            </div>
          </Link>
        </motion.div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Results;