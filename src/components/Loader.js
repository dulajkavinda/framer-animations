import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [-0, -30],
    transition: {
      x: { yoyo: Infinity, duration: 0.5 },
      y: { yoyo: Infinity, duration: 0.25, ease: "easeOut" },
    },
  },
  animationTwo: {
    x: [0, 40],
    y: [-0, -0],
    transition: {
      x: { yoyo: Infinity, duration: 0.5 },
      y: { yoyo: Infinity, duration: 0.25, ease: "easeOut" },
    },
  },
};

export default function Loader() {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <>
      <motion.div
        onTap={() => cycleAnimation()}
        variants={loaderVariants}
        animate={animation}
        className="loader"
      ></motion.div>
      <div onClick={() => cycleAnimation()}>Change Loader</div>
    </>
  );
}
