import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariant = {
  inactive: {},
  hover: {
    scale: [1.1, 1, 1.1, 1.1, 1, 1.1, 1.1, 1, 1.1],
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
  },
};

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 1.5 }}
      className="home container"
    >
      <motion.h2 animate={{}}>Welcome to Pizza Joint</motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariant}
          whileHover="hover"
          initial="inactive"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
