import useFetchTodo from './hooks/useFetchTodo';

const Example1 = () => {
  const { isLoading, data } = useFetchTodo();
  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <section data-name="Example1">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  );
};

export default Example1;
