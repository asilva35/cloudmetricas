import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ModalButton({ labelButton, open }) {
  return (
    <>
      <motion.div
        //whileHover={{ scale: 1.1 }}
        //whileTap={{ scale: 0.9 }}
        className="modal-button"
        onClick={open}
      >
        {labelButton}
      </motion.div>
    </>
  );
}
