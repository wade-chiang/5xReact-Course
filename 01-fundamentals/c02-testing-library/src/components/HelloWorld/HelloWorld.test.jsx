import { render } from '@testing-library/react';
import HelloWorld from '.';

describe('<HelloWorld />', () => {
  test('should render correct', () => {
    const { getByTestId, container, debug } = render(<HelloWorld />);
    // debug();
    expect(getByTestId('text').textContent).toBe('HelloWorld');
    expect(getByTestId('text')).toHaveTextContent('HelloWorld');
    expect(container.querySelector('h1').textContent).toBe('HelloWorld');
  });
});
