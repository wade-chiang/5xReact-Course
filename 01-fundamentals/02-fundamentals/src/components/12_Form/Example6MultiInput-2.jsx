import { useState } from 'react';

const GoodMultiInput = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
  });
  const atChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <section data-name="05-MultiInput-Good 😀" className="style-green">
      <h1>
        {state.name}, {state.email}
      </h1>
      <input
        placeholder="Name"
        className="my-input"
        type="text"
        name="name"
        value={state.name}
        onChange={atChange}
      />
      <input
        placeholder="Email"
        className="my-input"
        type="Email"
        name="email"
        value={state.email}
        onChange={atChange}
      />
    </section>
  );
};

export default GoodMultiInput;
