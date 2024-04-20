import { render, waitFor } from '@testing-library/react';

import { fetchData } from '../../services/api';
import DisplayData from '.';

vi.mock('../../services/api', () => ({
  fetchData: vi.fn(),
}));

describe('<DisplayData />', () => {
  test('children length', async () => {
    fetchData.mockResolvedValueOnce(['1', '2', '3']);

    const { getByTestId } = render(<DisplayData />);
    expect(fetchData).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(getByTestId('ul').children.length).toBe(3);
    });
  });
});
