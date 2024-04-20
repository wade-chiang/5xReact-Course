/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = (props) => {
  const { children } = props;
  const isLogged = useSelector((state) => state.user.name !== '');
  // https://reactrouter.com/docs/en/v6/api#navigate
  if (!isLogged) {
    return (
      <Navigate
        to={`/login?redirect_url=${encodeURIComponent(
          window.location.pathname,
        )}`}
        replace
      />
    );
  }
  return children;
};

export default ProtectedRoute;
