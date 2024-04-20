import { within, userEvent, expect } from '@storybook/test';
import { useState } from 'react';
import TagInput from './TagInput';

export default {
  title: 'TagInput',
  component: TagInput,
  argTypes: { onChange: { action: 'onChange' } },
};

export const Basic = ({ onChange }) => {
  const [tags, setTags] = useState(['Vue', 'React']);
  const atChange = (values) => {
    setTags(values);
    onChange(values);
  };
  return (
    <div>
      <TagInput tags={tags} onChange={atChange} />
      <h1>{tags.toString()}</h1>
    </div>
  );
};

export const DataFrom = ({ onChange }) => {
  const [tags, setTags] = useState(['Vue', 'React']);
  const atChange = (values) => {
    setTags(values);
    onChange(values);
  };
  return (
    <div>
      <TagInput tags={tags} onChange={atChange} />
      <h1>{tags.toString()}</h1>
      <button
        className="my-btn"
        onClick={() => {
          setTags(['webpack', 'javascript']);
        }}
      >
        setData
      </button>
    </div>
  );
};

export const BasicWithTest = ({ onChange }) => {
  const [tags, setTags] = useState(['Vue', 'React']);
  const atChange = (values) => {
    setTags(values);
    onChange(values);
  };

  return <TagInput tags={tags} onChange={atChange} />;
};
BasicWithTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getAllByTestId('taginput__tag').length).toBe(2);

  await userEvent.type(
    canvas.getByTestId('taginput__input'),
    'ShowMeTheMoney{enter}',
  );
  await expect(canvas.getAllByTestId('taginput__tag').length).toBe(3);

  // input same text
  await userEvent.type(
    canvas.getByTestId('taginput__input'),
    'ShowMeTheMoney{enter}',
  );
  await expect(canvas.getAllByTestId('taginput__tag').length).toBe(3);

  // delete text
  await userEvent.click(canvas.getByTestId('taginput__tag-remove-btn-Vue'));
  await expect(canvas.getAllByTestId('taginput__tag').length).toBe(2);
};
