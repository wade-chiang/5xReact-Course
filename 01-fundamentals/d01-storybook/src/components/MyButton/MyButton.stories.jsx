import MyButton from '.';

// https://storybook.js.org/docs/react/essentials/controls
export default {
  title: 'MyButton',
  component: MyButton,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    // https://storybook.js.org/docs/react/essentials/controls#annotation
    onClick: { action: 'button clicked' },
    rounded: {
      control: 'boolean',
    },
    color: {
      control: 'color',
    },
    children: {
      control: 'text',
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};

export const Basic = {
  args: {
    children: 'Basic',
  },
};

// https://storybook.js.org/docs/react/writing-stories/loaders
export const WidthLoader = {
  loaders: [
    async () => ({
      todo: await (
        await fetch('https://jsonplaceholder.typicode.com/todos/1')
      ).json(),
    }),
  ],
  render: (args, ctx) => {
    console.log(args);
    const { title } = ctx.loaded.todo;
    return <MyButton {...args}>{title}</MyButton>;
  },
};

export const Rounded = {
  args: {
    rounded: true,
    color: 'red',
    children: 'Rounded',
  },
};

export const Variants = {
  args: {
    variant: 'secondary',
    children: <img src="https://fakeimg.pl/200x150/?text=image" alt="" />,
  },
};
