import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { motion } from "framer-motion";
import Footer from "./Footer";

function About() {
  return (
    <>
      <motion.div
        class="about"
        initial={{ opacity: 0, y: "30%" }}
        animate={{ opacity: 1, y: "0" }}
        exit={{ opacity: 0, y: "30%" }}
      >
        <h1>How it Works?</h1>
        <p>
          It is possible using Natural Language Processing (NLP) concept called
          <a
            href="https://en.wikipedia.org/wiki/Sentiment_analysis"
            target="_blank"
          >
            &nbsp;Sentiment Analysis&nbsp;
          </a>
          that can determine if a chunk of text is positive, negative, or
          neutral based on its polarity.
        </p>
      </motion.div>
      <footer>
        <Link to="/">
          <div class="name">
            <p class="detail">⬅️ Back</p>
          </div>
        </Link>
        <div class="name">
          <img src="github.svg" />
          <p>abdulrcs</p>
        </div>
      </footer>
    </>
  );
}

export default About;
