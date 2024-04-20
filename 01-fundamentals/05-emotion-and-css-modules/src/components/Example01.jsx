// https://emotion.sh/docs/introduction
import { css } from '@emotion/css';

// TODO
const rootStyle = css`
  width: 100%;
  background-color: green;
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

const Example01 = () => {
  return (
    <section data-name="Example01" className={rootStyle}>
      <h1>hi emotion</h1>
      <button
        className={css`
          background: black;
          color: white;
          &:hover {
            background: red;
          }
        `}
      >
        Switch
      </button>
    </section>
  );
};
export default Example01;
