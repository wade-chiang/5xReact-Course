import useSWR from 'swr';
import axios from 'axios';

/*
type PostType = {
  userId: number,
  id: number,
  title: string,
  body: string,
};
*/

const fetcher = (url) => axios.get(url).then(({ data }) => data);

const Example3 = () => {
  // TODO
  const { data: user } = useSWR(
    'https://jsonplaceholder.typicode.com/users/4',
    fetcher,
  );

  // TODO
  const { data: posts } = useSWR(
    () =>
      user?.id
        ? `https://jsonplaceholder.typicode.com/posts?userId=${user?.id}`
        : null,
    fetcher,
  );
  if (!posts) return <div>loading post...</div>;
  return (
    <section data-name="Example3">
      <h3>Dependent Fetching</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <p>user id: {post.userId}</p>
          <p>title: {post.title}</p>
          <p>body: {post.body}</p>
          <hr />
        </div>
      ))}
    </section>
  );
};
export default Example3;
