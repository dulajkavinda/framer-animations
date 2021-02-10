import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowTitle(false);
  }, 4000);
  return (
    <motion.div
      variants={containerVariants}
      initial="inactive"
      animate="active"
      className="container order"
    >
      <AnimatePresence>
        {showTitle ? (
          <motion.h2 exit={{ y: -1000 }}>Thank you for your order :)</motion.h2>
        ) : null}
      </AnimatePresence>

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
