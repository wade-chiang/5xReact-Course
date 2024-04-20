/* eslint-disable react/jsx-props-no-spreading */
// https://reactjs.org/docs/jsx-in-depth.html#spread-attributes

const MyInput = (props) => {
  const { label, placeholder } = props;
  return (
    <section data-name="InnerComponent">
      <label className="block mb-2">{label}</label>
      <input type="text" className="my-input" placeholder={placeholder} />
    </section>
  );
};

const Example20 = () => {
  // TODO 2
  const data = {
    label: 'Address',
    placeholder: 'Your Address',
  };
  return (
    <section data-name="Example21">
      <div>Example20</div>
      {/* TODO 1 */}
      <MyInput label="Name" placeholder="Your Name" />
      {/* TODO 2 */}
      <MyInput {...data} />

      {/* TODO 3 */}
      <MyInput
        label="Email"
        placeholder="Your Email"
        className="bg-primary"
        type="email"
      />
    </section>
  );
};

export default Example20;
