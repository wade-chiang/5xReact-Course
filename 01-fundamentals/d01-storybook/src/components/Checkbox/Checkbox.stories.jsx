import { useState, useCallback } from 'react';

import Checkbox from '.';
import CheckboxGroup from './CheckboxGroup';

export default {
  title: 'Checkbox',
  argTypes: {
    // https://storybook.js.org/docs/react/essentials/controls#annotation
    onChange: { action: 'Checkbox change' },
  },
};

export const Basic = ({ onChange }) => {
  return (
    <CheckboxGroup onChange={onChange}>
      <Checkbox value="react" text="Hello Checkbox" />
    </CheckboxGroup>
  );
};
export const Multi = ({ onChange }) => {
  const [skill, setSkill] = useState(['react', 'vue']);
  const atChange = useCallback(
    (values) => {
      setSkill(values);
      onChange(values);
    },
    [onChange],
  );
  return (
    <div>
      <h2>{JSON.stringify(skill)}</h2>
      <CheckboxGroup defaultValue={skill} onChange={atChange}>
        <Checkbox value="react" text="React" />
        <Checkbox value="es6" text="es6" />
        <Checkbox value="vue" text="Vue" />
        <Checkbox text="Javascript" />
      </CheckboxGroup>
    </div>
  );
};
export const Disabled = ({ onChange }) => {
  return (
    <CheckboxGroup onChange={onChange}>
      <Checkbox text="React" />
      <Checkbox disabled value="react" text="disabled" />
    </CheckboxGroup>
  );
};
