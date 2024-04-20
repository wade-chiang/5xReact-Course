import { render } from '@testing-library/react';

import MockComponent from '..';

// Mock Component 方法1
vi.mock('../NeedMockComponent', () => {
  const NeedMockComponent = () => {
    return <small>NeedMockComponent</small>;
  };
  return { default: NeedMockComponent };
});

// Mock Component 方法2, 會自載 和該 Component 同路徑下的 ./__mocks__/同檔名
vi.mock('../NeedMockComponent2');

describe('<MockComponent />', () => {
  test('should render correct', async () => {
    const { container } = render(<MockComponent />);
    expect(container.querySelector('.mock-component__h1')).toHaveTextContent(
      'MockComponent',
    );
  });
});
