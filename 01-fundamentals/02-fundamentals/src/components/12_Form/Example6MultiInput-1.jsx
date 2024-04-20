import React from 'react';

const BadMultiInput = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const atNameChange = (e) => {
    setName(e.target.value);
  };
  const atEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <section
      data-name="05-MultiInput-Bad 😱"
      className="style-red"
      data-gradient
    >
      <h1>
        {name}, {email}
      </h1>
      <input
        placeholder="Name"
        className="my-input"
        type="text"
        value={name}
        onChange={atNameChange}
      />
      <input
        placeholder="Email"
        className="my-input"
        type="Email"
        value={email}
        onChange={atEmailChange}
      />
    </section>
  );
};
export default BadMultiInput;
