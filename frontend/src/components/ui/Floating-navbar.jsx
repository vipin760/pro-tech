import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { NavLink } from "react-router-dom";

import { cn } from "../../utils/cn";

const FloatingNavbar = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-white dark:border-white/[0.2] rounded-full dark:bg-black bg-black text-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-8 pl-8 py-2  items-center justify-center space-x-4",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <NavLink
              to={navItem.link}
              key={idx}
              // href={navItem.link}
              className={cn("relative items-center flex space-x-1")}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                };
              }}
            >
              <span className={`block sm:hidden text-sm`}>{navItem.name}</span>
              <span className={`hidden sm:block text-sm`}>
                <span className="flex">
                  {navItem.icon} <p className="mx-1">{navItem.name}</p>{" "}
                </span>
              </span>
            </NavLink>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FloatingNavbar;
