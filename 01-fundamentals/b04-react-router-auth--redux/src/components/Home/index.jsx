import { Link } from 'react-router-dom';
import Authenticate from '@/containers/Authenticate';
import withAuth from '@/utils/withAuth';
import Profile from '@/components/Profile';

const WithAuthProfile = withAuth(Profile);

const Home = () => {
  return (
    <section data-name="Home">
      <h3 className="text-5xl">Hello React</h3>
      <Link to="/video" className="underline">
        video
      </Link>
      {/* TODO */}
      <WithAuthProfile />
      <Authenticate>
        {(user) => {
          return (
            <div className="bg-black text-white p-2 rounded my-2">
              hi, {user.name}, email:{user.email}
            </div>
          );
        }}
      </Authenticate>
    </section>
  );
};
export default Home;
