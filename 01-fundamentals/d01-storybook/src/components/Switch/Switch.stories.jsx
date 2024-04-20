import Switch from '.';

export default {
  title: 'Switch',
  component: Switch,
  argTypes: {
    checked: {
      control: 'boolean',
    },
  },
};

export const Basic = {
  args: {
    checked: false,
  },
};
export const Checked = {
  args: {
    checked: true,
  },
};
