import { render, fireEvent } from '@testing-library/react';
import Quantity from '.';

describe('<Quantity />', () => {
  test('should be render correct', () => {
    const { getByTestId, container } = render(<Quantity />);
    expect(getByTestId('quantity')).toHaveTextContent('0');

    expect(container).toMatchSnapshot();
  });

  test('should display correct quantity when props change', () => {
    const { getByTestId, rerender, container } = render(<Quantity />);

    rerender(<Quantity value={10} />);
    expect(getByTestId('quantity')).toHaveTextContent('10');
    expect(container).toMatchSnapshot();
  });

  test('should toggle callback when + button click', () => {
    const onChange = vi.fn();
    const { getByText } = render(<Quantity onChange={onChange} />);

    fireEvent.click(getByText('+'));
    expect(onChange).toBeCalledTimes(1);
    expect(onChange.mock.calls[0][0]).toBe(1);
  });

  test('should disable button when value > maxValue', () => {
    const { getByText, rerender } = render(<Quantity />);

    expect(getByText('-')).toBeDisabled();
    expect(getByText('+')).not.toBeDisabled();

    rerender(<Quantity value={5} maxValue={5} />);
    expect(getByText('-')).not.toBeDisabled();
    expect(getByText('+')).toBeDisabled();
  });
});
