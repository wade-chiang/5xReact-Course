import React, { useState, useImperativeHandle, useCallback } from 'react';

const Form1 = React.forwardRef((props, ref) => {
  const [state, setState] = useState({
    name: '',
    email: '',
  });

  const atSubmit = useCallback(() => {
    if (state.name && state.email) {
      return Promise.resolve(state);
    }
    return Promise.reject(new Error('invalid form'));
  }, [state]);

  useImperativeHandle(
    ref,
    () => {
      return {
        submit: atSubmit,
      };
    },
    [atSubmit],
  );

  const atInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section data-name="Form1">
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={state.name}
          onChange={atInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={state.email}
          onChange={atInputChange}
        />
      </div>
    </section>
  );
});

export default Form1;
