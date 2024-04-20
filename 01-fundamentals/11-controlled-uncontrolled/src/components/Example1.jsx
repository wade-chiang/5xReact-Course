import React from 'react';
// https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/#conclusion

const Example = () => {
  const [input, setInput] = React.useState('');

  const formRef = React.useRef(null);

  const inputRef = React.useRef(null);
  const atSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);

    const formData = {};
    [...new FormData(formRef.current).entries()].forEach(([key, value]) => {
      formData[key] = value;
    });
    console.log(formData);
  };

  return (
    <section data-name="Example1">
      <section data-name="Controlled">
        <h3>{input}</h3>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </section>

      <section data-name="Uncontrolled">
        <form ref={formRef} onSubmit={atSubmit}>
          <input
            type="text"
            defaultValue="DefaultValue"
            ref={inputRef}
            name="name"
          />
          <div>
            <label>
              <input type="radio" name="gender" defaultValue="1" />
              <span>男</span>
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                defaultValue="0"
                defaultChecked
              />
              <span>女</span>
            </label>
          </div>
          <button className="my-btn" type="submit">
            Submit
          </button>
        </form>
      </section>
    </section>
  );
};

export default Example;
