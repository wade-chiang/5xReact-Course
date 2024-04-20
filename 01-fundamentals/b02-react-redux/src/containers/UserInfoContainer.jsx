import { useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserInfo from '../components/UserInfo';
import { actionUpdateUserInfo } from '../actions';

const UserInfoContainer = () => {
  // TODO Bad
  const { userInfo } = useSelector((state) => state);
  // TODO Good
  // const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const atUpdateUserData = useCallback(
    (data) => {
      dispatch(actionUpdateUserInfo(data));
    },
    [dispatch],
  );

  return <UserInfo userInfo={userInfo} onUpdateUserData={atUpdateUserData} />;
};

export default memo(UserInfoContainer);
