import { useState } from 'react';
import Show from './Show';

const Example = () => {
  const [show, setShow] = useState(false);
  return (
    <section data-name="ShowExample">
      <input
        className="my-toggle"
        onChange={(e) => setShow(e.target.checked)}
        type="checkbox"
      />
      <Show when={show}>
        <h1 className="bg-info">show</h1>
      </Show>
      <Show when={show}>
        <h1 className="bg-primary">show</h1>
      </Show>
    </section>
  );
};

export default Example;
