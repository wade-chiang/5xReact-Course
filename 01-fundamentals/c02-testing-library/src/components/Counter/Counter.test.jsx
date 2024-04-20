import { render, fireEvent } from '@testing-library/react';
import Counter from '.';

describe('<Counter />', () => {
  test('should render correct', () => {
    const { getByTestId, getByText } = render(<Counter />);

    expect(getByTestId('display_count').textContent).toBe('0');

    fireEvent.click(getByText('Increase'));
    expect(getByTestId('display_count')).toHaveTextContent('1');

    fireEvent.click(getByText('Decrease'));
    expect(getByTestId('display_count')).toHaveTextContent('0');
  });

  test('render with defaultCount', () => {
    const { getByTestId } = render(<Counter defaultCount={10} />);
    expect(getByTestId('display_count')).toHaveTextContent('10');
  });
});
