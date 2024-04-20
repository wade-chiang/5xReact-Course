import { useSelector } from 'react-redux';

const Video = () => {
  const user = useSelector((state) => state.user);
  return (
    <section data-name="Video">
      <h1>{user.name}您好</h1>
      <h2>email:{user.email}</h2>
    </section>
  );
};

export default Video;
