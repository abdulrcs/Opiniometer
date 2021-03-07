import React, { useState, useEffect, useRef } from "react";
import About from "./About";
import Main from "./Main";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Footer = () => {
  return (
    <footer>
      <Link to="/about">
        <p class="detail">How it Works?</p>
      </Link>
      <div class="name">
        <img src="github.svg" />
        <p>abdulrcs</p>
      </div>
    </footer>
  );
};

export default Footer;
