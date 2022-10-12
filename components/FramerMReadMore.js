import React from 'react';
import { motion, useCycle } from 'framer-motion';

export default function FramerMReadMore({
  idName = '',
  className = '',
  labelOpen = 'Read More',
  labelClose = 'Read Less',
  children,
}) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const animation = {
    open: {
      height: `auto`,
      overflow: `auto`,
      transition: {
        type: 'spring',
        stiffness: 50,
        restDelta: 2,
      },
    },
    closed: {
      height: `0`,
      overflow: `hidden`,
      transition: {
        delay: 0.1,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const __toggleOpen = (opt) => {
    toggleOpen(opt);
  };
  return (
    <div id={idName} className={className}>
      <motion.div animate={isOpen ? 'open' : 'closed'} variants={animation}>
        {children}
      </motion.div>
      <div className="link" onClick={__toggleOpen}>
        {isOpen ? labelClose : labelOpen}
      </div>
    </div>
  );
}
