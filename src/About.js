import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "30%" }}
      animate={{ opacity: 1, y: "0" }}
      exit={{ opacity: 0, y: "30%" }}
    >
      <h1>Hello World</h1>;
    </motion.div>
  );
}

export default About;
