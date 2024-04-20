import React from 'react';
import useSWR from 'swr';
import { fetchUserData } from '../../services/api';

const InnerComponent = () => {
  const { data } = useSWR('/api/user', () => fetchUserData());
  return (
    <section data-name="InnerComponent">
      <h1>InnerComponent</h1>
      <div className="my-code">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  );
};

export default React.memo(InnerComponent);
