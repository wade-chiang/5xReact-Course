/*
 !注意，因為是使用 create-react-app，
 其自帶的 eslint 會把 @testing-library/dom 換成 @testing-library/react
 所以需要關閉 eslint
 */
/* eslint-disable */
import {
  getByText,
  getByTestId,
  queryByTestId,
  waitFor,
  fireEvent
} from '@testing-library/dom';

// 這裡就不需要載入以下套件，setupTests.js 已經有設定
// import '@testing-library/jest-dom';

function createExampleDOM() {
  const div = document.createElement('div');
  div.innerHTML = `
    <input id="username" data-testid="username" />
    <button>fetch Username</button>
  `;
  const button = div.querySelector('button');
  const input = div.querySelector('input');
  button.addEventListener('click', () => {
    setTimeout(() => {
      const resultDIV = document.createElement('div');
      resultDIV.innerHTML = `
        <div data-testid="result">${input.value}</div>
      `;
      div.appendChild(resultDIV);
    }, 100);
  });
  return div;
}

test('examples of jest-dom', async () => {
  const resultText = 'milkmidi';
  const container = createExampleDOM();

  // query DOM
  // Method 1
  // 使用和 HTML 相同的 找到 querySelector 函式。
  // const input = container.querySelector('#username');

  // Method 2
  // 使用 queryByTestId() 函式
  const input = queryByTestId(container, 'username');

  // 更新 input 的 value
  input.value = resultText;

  // 找到 button 元素，這裡使用 getByText 函式
  const btn = getByText(container, 'fetch Username');
  // 觸發點擊事件
  // Method 1
  // btn.click()
  // Method 2
  fireEvent.click(btn);

  // 等待 result 元素的出現
  await waitFor(() => expect(queryByTestId(container, 'result')).toBeTruthy());

  // 斷言 result 元素其 textContent 文字要為 resultText
  expect(getByTestId(container, 'result')).toHaveTextContent(resultText);
  // 使用 jest 快照模式來比對 DOM 節點。
  expect(container).toMatchSnapshot();
});
