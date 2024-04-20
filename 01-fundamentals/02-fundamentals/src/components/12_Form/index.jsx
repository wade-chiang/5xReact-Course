import Example1Input from './Example1Input';
import Example2Radio from './Example2Radio';
import Example3Select from './Example3Select';
import Example4Checkbox from './Example4Checkbox';
import Example5Checkbox from './Example5Checkbox';
import Example6MultiInput1 from './Example6MultiInput-1';
import Example6MultiInput2 from './Example6MultiInput-2';
import Example6MultiInput3 from './Example6MultiInput-3';

const Example = () => {
  return (
    <section data-name="Example12">
      {/* <Example1Input /> */}
      {/* <Example2Radio /> */}
      {/* <Example3Select /> */}
      {/* <Example4Checkbox /> */}
      {/* <Example5Checkbox /> */}
      <div>
        <Example6MultiInput1 />
        <Example6MultiInput2 />
        <Example6MultiInput3 />
      </div>
    </section>
  );
};

export default Example;
