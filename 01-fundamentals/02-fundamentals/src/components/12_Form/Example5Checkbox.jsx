import React from 'react';

const DATA = ['學會React', '學會Webpack', '年薪百萬'];

const FormCheckbox2 = () => {
  const [checkbox, setCheckbox] = React.useState([]);
  const atInputChange = (e) => {
    const { value, checked } = e.target;
    const idxOf = checkbox.indexOf(value);
    if (checked && idxOf < 0) {
      setCheckbox((prev) => prev.concat(value));
    }
    if (idxOf > -1) {
      setCheckbox((prev) => {
        return prev.slice(0, idxOf).concat(prev.slice(idxOf + 1));
      });
    }
  };

  return (
    <section data-name="FormCheckbox">
      <p>checkList:{checkbox.toString()}</p>
      {DATA.map((text) => {
        const checked = checkbox.indexOf(text) !== -1;
        return (
          <label key={text} className="me-2">
            <input
              type="checkbox"
              className="my-checkbox"
              value={text}
              checked={checked}
              onChange={atInputChange}
            />
            {text}
          </label>
        );
      })}
    </section>
  );
};

export default FormCheckbox2;
