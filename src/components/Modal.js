import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const backdrop = {
  active: {
    opacity: 1,
  },
  inactive: {
    opacity: 0,
  },
};

const modal = {
  inactive: {
    y: "-100vw",
    opacity: 0,
  },
  active: {
    y: 100,
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

export default function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          variants={backdrop}
          animate="active"
          initial="inactive"
          className="backdrop"
          exit="inactive"
        >
          <motion.div variants={modal} className="modal">
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button>Okay</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
