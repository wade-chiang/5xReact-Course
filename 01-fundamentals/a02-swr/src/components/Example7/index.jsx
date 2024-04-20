import useSWR, { useSWRConfig } from 'swr';
import InnerComponent from './InnerComponent';
import { fetchUserData } from '../../services/api';

const Example = () => {
  const { data } = useSWR('/api/user', () => fetchUserData());
  const { mutate } = useSWRConfig();
  return (
    <section data-name="Example7">
      <div className="my-code">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <button
        className="my-btn"
        onClick={() => {
          mutate('/api/user', undefined);
        }}
      >
        Logout
      </button>

      <InnerComponent />
    </section>
  );
};

export default Example;
