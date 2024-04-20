import { useCallback } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Login from '@/components/Login';
import { actionLogin } from '@/actions';

const LoginContainer = () => {
  const isLogged = useSelector((state) => state.user.name !== '');
  const dispatch = useDispatch();

  const atLogin = useCallback((email, password) => {
    return dispatch(actionLogin(email, password));
  }, []);

  if (isLogged) {
    const searchParams = new URLSearchParams(window.location.search);
    const redirectUrl = decodeURIComponent(
      searchParams.get('redirect_url') ?? '/',
    );
    return <Navigate to={redirectUrl} />;
  }
  return <Login onLogin={atLogin} />;
};

export default LoginContainer;
