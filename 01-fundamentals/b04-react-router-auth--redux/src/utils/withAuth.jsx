/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from 'react-redux';

export default function withAuth(Component) {
  const WithAuthComponent = (props) => {
    const user = useSelector((state) => state.user);
    return <Component {...props} user={user} />;
  };

  return WithAuthComponent;
}
