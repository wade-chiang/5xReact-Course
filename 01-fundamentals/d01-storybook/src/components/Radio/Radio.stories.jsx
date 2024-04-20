import Radio from '.';
import RadioGroup from './RadioGroup';

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {
    // https://storybook.js.org/docs/react/essentials/controls#annotation
    onChange: { action: 'Radio change' },
  },
};

export const Basic = (args) => {
  return (
    <RadioGroup name="skill" onChange={args.onChange}>
      <div className="row">
        <div className="col-3">
          <Radio label="React" />
        </div>
        <div className="col-3">
          <Radio label="Vue" />
        </div>
        <div className="col-3">
          <Radio label="Angular" />
        </div>
        <div className="col-3">
          <Radio label="jQuery" disabled />
        </div>
      </div>
    </RadioGroup>
  );
};

export const DefaultValue = (args) => {
  return (
    <RadioGroup name="Gender" defaultValue="0" onChange={args.onChange}>
      <div className="d-block">
        <Radio label="男" value="1" />
      </div>
      <div className="d-block">
        <Radio label="女" value="0" />
      </div>
    </RadioGroup>
  );
};
