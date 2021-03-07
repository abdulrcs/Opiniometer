import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { motion } from "framer-motion";
import Footer from "./Footer";

function About() {
  return (
    <motion.div
      class="about"
      initial={{ opacity: 0, y: "30%" }}
      animate={{ opacity: 1, y: "0" }}
      exit={{ opacity: 0, y: "30%" }}
    >
      <h1>How it Works?</h1>
      <p>
        Molestiae delectus expedita et esse expedita. Autem sunt iure et nostrum
        natus iste consequatur. Debitis autem rerum et ex ut culpa placeat
        cupiditate dolorum. Nulla vero dolores.
      </p>
    </motion.div>
  );
}

export default About;
