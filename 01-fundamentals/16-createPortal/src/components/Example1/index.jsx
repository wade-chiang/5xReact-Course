import { useState, useCallback } from 'react';
import Dialog from './Dialog';

const Example = () => {
  const [show, setShow] = useState(false);
  const atDialogClose = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <section data-name="Example1">
      <button className="my-btn" onClick={() => setShow(true)}>
        Dialog
      </button>

      <Dialog show={show} onClose={atDialogClose}>
        <h1>React</h1>
      </Dialog>
    </section>
  );
};
export default Example;
