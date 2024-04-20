import { useState } from 'react';
import Dialog from './Dialog';

const Example = () => {
  const [open, setOpen] = useState(false);
  const atClose = () => {
    setOpen(false);
  };
  return (
    <div className="app">
      <button className="my-btn" onClick={() => setOpen(true)}>
        open
      </button>
      <Dialog open={open} onClose={atClose}>
        <div className="bg-red-200 p-4">Children</div>
      </Dialog>
    </div>
  );
};

export default Example;
