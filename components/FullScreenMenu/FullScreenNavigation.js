import React from 'react';
import { motion } from 'framer-motion';
import FullScreenMenuItem from './FullScreenMenuItem';

export default function FullScreenNavigation({ toggle }) {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  return (
    <>
      <motion.ul className="f-navigation" variants={variants}>
        <FullScreenMenuItem
          label={`Inicio`}
          href={`#home`}
          whiteIcon={`home-icon-white.png`}
          blueIcon={`home-icon-blue.png`}
          toggle={toggle}
        />
        <FullScreenMenuItem
          label={`Acerca`}
          href={`#about`}
          whiteIcon={`about-icon-white.png`}
          blueIcon={`about-icon-blue.png`}
          toggle={toggle}
        />
        <FullScreenMenuItem
          label={`Servicios`}
          href={`#services`}
          whiteIcon={`services-icon-white.png`}
          blueIcon={`services-icon-blue.png`}
          toggle={toggle}
        />
        <FullScreenMenuItem
          label={`Contacto`}
          href={`#contactus`}
          whiteIcon={`contactus-icon-white.png`}
          blueIcon={`contactus-icon-blue.png`}
          toggle={toggle}
        />
        <FullScreenMenuItem
          label={`Soporte`}
          href={`#support`}
          whiteIcon={`support-icon-white.png`}
          blueIcon={`support-icon-blue.png`}
          toggle={toggle}
        />
        <FullScreenMenuItem
          label={`Facebook`}
          href={`#facebook`}
          whiteIcon={`facebook-icon-white.png`}
          blueIcon={`facebook-icon-blue.png`}
          toggle={toggle}
        />
        <FullScreenMenuItem
          label={`Instagram`}
          href={`#instagram`}
          whiteIcon={`instagram-icon-white.png`}
          blueIcon={`instagram-icon-blue.png`}
          toggle={toggle}
        />
        <FullScreenMenuItem
          label={`Youtube`}
          href={`#youtube`}
          whiteIcon={`youtube-icon-white.png`}
          blueIcon={`youtube-icon-blue.png`}
          toggle={toggle}
        />
      </motion.ul>
    </>
  );
}
