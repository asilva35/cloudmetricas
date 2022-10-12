import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const hoverIcon = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function FullScreenMenuItem({
  label,
  href,
  toggle,
  whiteIcon,
  blueIcon,
}) {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 1 }}
      onClick={toggle}
    >
      <Link href={href}>
        <a>
          <motion.div
            className="icon-placeholder"
            whileHover={{ backgroundColor: '#FFC93C' }}
            whileTap={{ backgroundColor: '#FFC93C' }}
          >
            <div className="icon-white">
              <Image
                src={`/assets/images/${whiteIcon}`}
                alt={label}
                width={32}
                height={32}
              />
            </div>
            <div className="icon-blue">
              <Image
                src={`/assets/images/${blueIcon}`}
                alt={label}
                width={32}
                height={32}
              />
            </div>
          </motion.div>
          <div className="text-placeholder">{label}</div>
        </a>
      </Link>
    </motion.li>
  );
}
