import React from 'react';
import { useSelector } from 'react-redux';

const Authenticate = (props) => {
  const { children } = props;
  const user = useSelector((state) => state.user);

  if (!user.name) {
    return null;
  }

  let child = children;
  if (typeof children === 'function') {
    child = children(user);
  }
  return child;
};

export default React.memo(Authenticate);
