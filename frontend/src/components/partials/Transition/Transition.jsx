import React from "react";
import { motion } from "framer-motion";

const Transition = ({children}) => {
  return (
    <motion.div className="bg-black"
      initial={{ scaleX: 0, rotateX: 0 }}
      animate={{ scaleX: 1, rotateX: [45, 0] }}
      transition={{ duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
