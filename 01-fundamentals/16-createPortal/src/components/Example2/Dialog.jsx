/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './Dialog.module.scss';

const Dialog = (props) => {
  const { open, onClose, children } = props;

  const dialogRef = useRef();

  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className={styles.dialog} ref={dialogRef}>
      <div>{children}</div>
      <div>
        <button className="my-btn" onClick={onClose}>
          Confirm
        </button>
      </div>
    </dialog>,
    document.getElementById('modal-root'),
  );
};

export default Dialog;
