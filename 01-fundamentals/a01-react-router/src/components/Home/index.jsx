import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section data-name="Home">
      <h3 className="text-5xl">Hello React</h3>
      {/* TODO */}
      <Link to="/video" className="underline">
        video
      </Link>
    </section>
  );
};
export default Home;
