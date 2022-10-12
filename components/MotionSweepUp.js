import React from 'react';
import { motion } from 'framer-motion';

export default function MotionSweepUp({ className = '', delay = 0, children }) {
  const container = {
    hidden: { opacity: 0, top: 10 },
    show: {
      opacity: 1,
      top: 0,
      transition: {
        staggerChildren: 0.2,
        delay,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, top: 10 },
    show: { opacity: 1, top: 0 },
  };
  return (
    children && (
      <motion.div
        className={`motion-sweep-up ${className}`}
        variants={container}
        initial="hidden"
        whileInView="show"
      >
        {React.Children.map(children, (child) => (
          <motion.div className="motion-sweep-up-child" variants={item}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    )
  );
}
