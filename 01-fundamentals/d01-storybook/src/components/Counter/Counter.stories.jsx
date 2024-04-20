import { within, userEvent, expect } from '@storybook/test';
import Counter from '.';
// https://storybook.js.org/docs/react/essentials/controls
export default {
  title: 'Counter',
  component: Counter,
  tags: ['autodocs'],
  argTypes: {
    // https://storybook.js.org/docs/react/essentials/actions
    defaultCount: {
      control: 'number',
    },
  },
};

export const Basic = {};
// https://storybook.js.org/docs/react/writing-stories/introduction#using-the-play-function
// https://storybook.js.org/docs/react/writing-tests/interaction-testing#write-an-interaction-test
Basic.play = async ({ canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByText('Increase'));
  await expect(canvas.getByTestId('display_count').textContent).toBe('1');

  await userEvent.click(canvas.getByText('Decrease'));
  await expect(canvas.getByTestId('display_count').textContent).toBe('0');
};
