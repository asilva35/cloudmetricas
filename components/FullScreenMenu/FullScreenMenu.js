import { motion, useCycle } from 'framer-motion';
import React, { useRef } from 'react';
import FullScreenMenuToggle from './FullScreenMenuToggle';
import FullScreenNavigation from './FullScreenNavigation';
//import { useDimensions } from '../use-dimensions';
import Image from 'next/image';

export default function FullScreenMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  //const { height } = useDimensions(containerRef);
  const { height } = 1000;
  const animation = {
    open: (height = 1000) => ({
      transform: `translateY(-300px)`,
      transition: {
        type: 'spring',
      },
    }),
    closed: {
      transform: `translateY(0px)`,
      transition: {
        delay: 0.5,
        type: 'spring',
      },
    },
  };
  const _toggleOpen = (opt) => {
    const menu = document.getElementById('btn-show-menu-full');
    console.log(24);
    setTimeout(() => {
      menu.classList.toggle('active');
    }, 500);
    toggleOpen(opt);
  };
  return (
    <div className="full-screen-menu">
      <a
        id="btn-show-menu-full"
        className="btn-show-menu-full"
        href="#!"
        onClick={_toggleOpen}
      >
        <svg
          width="44"
          height="24"
          viewBox="0 0 22 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1" x2="22" y2="1" stroke="white" />
          <line y1="6" x2="22" y2="6" stroke="white" />
          <line y1="11" x2="22" y2="11" stroke="white" />
        </svg>
      </a>
      <motion.nav
        className="full-screen-nav"
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        variants={animation}
      >
        <motion.div className="bg" />
        <FullScreenNavigation toggle={_toggleOpen} />
      </motion.nav>
    </div>
  );
}
