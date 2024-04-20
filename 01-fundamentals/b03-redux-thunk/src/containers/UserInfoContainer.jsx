import { useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserInfo from '../components/UserInfo';
// TODO
import { updateUserInfo } from '../actions';

const UserInfoContainer = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const atUpdateUserData = useCallback(
    (data) => {
      // TODO
      dispatch(updateUserInfo(data));
    },
    [dispatch],
  );

  return <UserInfo userInfo={userInfo} onUpdateUserData={atUpdateUserData} />;
};

export default memo(UserInfoContainer);
