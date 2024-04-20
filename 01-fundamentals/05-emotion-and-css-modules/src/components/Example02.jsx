// https://emotion.sh/docs/introduction
/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';

// TODO 雖然好用，但不推這樣寫，因為會用 HOC 再多包一層，不推
const rootStyle = css`
  width: 100%;
  background-color: #e74c3c;
  padding: 32px;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: white;
  }
  h1 {
    font-size: 100px;
  }
`;

const Example02 = () => {
  const [select, setSelect] = useState(false);
  return (
    <section data-name="Example02" className="example02" css={rootStyle}>
      <h1>hi emotion React</h1>
      <button
        css={css`
          color: ${select ? 'white' : 'black'};
          background: ${select ? 'black' : 'white'};
          padding: 10px;
          border-radius: 20px;
        `}
        onClick={() => setSelect(!select)}
      >
        Switch
      </button>
    </section>
  );
};
export default Example02;
