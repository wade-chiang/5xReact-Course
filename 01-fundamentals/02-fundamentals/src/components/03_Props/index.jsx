import FunctionalCard01 from './FunctionalCard01';
import './style.scss';

const Example3 = () => {
  return (
    <section data-name="Example3" className="flex">
      <FunctionalCard01
        img="http://fakeimg.pl/500x300/3498db/"
        name="milkmidi"
        price={999}
      />
      <FunctionalCard01
        img="http://fakeimg.pl/500x300/e74c3c/"
        name="奶綠茶"
        price={200}
      >
        {/* TODO 這裡有 h1 會放到 props.children */}
        <h1 className="bg-info">我是子元素</h1>
      </FunctionalCard01>
    </section>
  );
};
export default Example3;
