import React, { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  active: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  inactive: {
    x: "100vw",
    opacity: 0,
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const childVariant = {
  inactive: {
    opacity: 0,
  },
  active: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="inactive"
      animate="active"
      exit="exit"
      className="container order"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariant}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariant}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
