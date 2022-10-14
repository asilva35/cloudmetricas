import { motion } from 'framer-motion';
import { Children, useState } from 'react';
import ModalBackdrop from './ModalBackdrop';
import ModalButton from './ModalButton';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

export default function ModalWindow({
  labelButton = false,
  initialState = 'hidden',
  callback = null,
  children,
}) {
  const [modalOpen, setModalOpen] = useState(() =>
    initialState == 'hidden' ? false : true
  );

  const close = () => {
    setModalOpen(false);
    callback && callback();
  };
  const open = () => {
    setModalOpen(true);
    callback && callback();
  };
  const toggle = () => {
    setModalOpen(!modalOpen);
    callback && callback();
  };
  return (
    <>
      <div className="modal-container">
        {labelButton && (
          <ModalButton labelButton={labelButton} open={open}></ModalButton>
        )}
        {modalOpen && (
          <ModalBackdrop onClick={close}>
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="modal-window"
              variants={dropIn}
              initial={initialState}
              animate="visible"
              exit="exit"
            >
              <div className="close-modal-window" onClick={close}>
                &times;
              </div>
              <div className="modal-window-body">{children}</div>
            </motion.div>
          </ModalBackdrop>
        )}
      </div>
    </>
  );
}
