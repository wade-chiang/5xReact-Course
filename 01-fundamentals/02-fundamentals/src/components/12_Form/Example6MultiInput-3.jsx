import { useState } from 'react';

const GoodMultiInput = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
  });
  // Currying
  const changeHandle = (name) => {
    return (e) => {
      const { value } = e.target;
      setState((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    };
  };
  return (
    <section data-name="05-MultiInput-Good 😀" className="style-yellow">
      <h1>
        {state.name}, {state.email}
      </h1>
      <input
        placeholder="Name"
        className="my-input"
        type="text"
        value={state.name}
        onChange={changeHandle('name')}
      />
      <input
        placeholder="Email"
        className="my-input"
        type="Email"
        value={state.email}
        onChange={changeHandle('email')}
      />
    </section>
  );
};

export default GoodMultiInput;
