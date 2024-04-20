import MyComponent from './MyComponent';

const index = () => {
  return (
    <section data-name="Example1">
      <MyComponent>{(name) => <h1>{name}</h1>}</MyComponent>
    </section>
  );
};

export default index;
