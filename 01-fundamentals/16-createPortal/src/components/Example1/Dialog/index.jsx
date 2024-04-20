import ReactDOM from 'react-dom';
import './Dialog.scss';

// https://react.dev/reference/react-dom/createPortal
const Dialog = (props) => {
  const { show, onClose, children } = props;
  return ReactDOM.createPortal(
    <dialog className="modal-dialog" open={show}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </dialog>,
    document.getElementById('modal-root'),
  );
};
export default Dialog;
