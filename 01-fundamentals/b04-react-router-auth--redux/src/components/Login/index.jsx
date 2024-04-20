import { useState } from 'react';

/*
type LoginProps = {
  onLogin: (email: string, password: string) => Promise<void>,
};
*/

const Login = (props) => {
  const { onLogin } = props;
  const [inputs, setInputs] = useState({
    email: 'milkmidi@gmail.com', // dummy data
    password: '12345', // dummy data
  });

  const [errorMessage, setErrorMessage] = useState('');

  const atInputChange = (e) => {
    const target = e.currentTarget;
    setInputs((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };

  const atLogin = () => {
    setErrorMessage('');
    onLogin(inputs.email, inputs.password).catch((error) => {
      console.error(error);
      setErrorMessage(error.message);
    });
  };

  return (
    <section data-name="Login">
      <input
        type="email"
        name="email"
        className="my-input"
        value={inputs.email}
        onChange={atInputChange}
      />
      <input
        type="password"
        name="password"
        className="my-input"
        value={inputs.password}
        onChange={atInputChange}
      />
      <br />
      <button className="my-btn" onClick={atLogin}>
        Login
      </button>
      {errorMessage && <div className="text-red">{errorMessage}</div>}
    </section>
  );
};

export default Login;
