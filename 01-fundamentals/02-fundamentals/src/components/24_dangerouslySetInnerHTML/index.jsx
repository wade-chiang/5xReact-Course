const INNER_HTML = `
  <div>
    <u><b>InnerHTML</b></u>
    <img src="https://fakeimg.pl/250x100/" />
    <script>
      alert('hi');
    </script>
  </div>

`;

const Example = () => {
  return (
    <section data-name="Example">
      <div dangerouslySetInnerHTML={{ __html: INNER_HTML }} />
    </section>
  );
};

export default Example;
