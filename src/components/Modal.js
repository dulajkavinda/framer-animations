import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  active: {
    opacity: 1,
  },
  inactive: {
    opacity: 0,
  },
};

export default function Modal({ showModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          variants={backdrop}
          animate="active"
          initial="inactive"
          className="backdrop"
        ></motion.div>
      )}
    </AnimatePresence>
  );
}
