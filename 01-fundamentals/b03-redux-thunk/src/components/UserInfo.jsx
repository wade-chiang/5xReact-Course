import React from 'react';
import RenderTip from './RenderTip';

/*
type UserInfoProps = {
  userInfo: {
    name: string,
    age: number,
  },
  onUpdateUserData: (data: any) => void,
};
*/
const UserInfo = (props) => {
  const { userInfo, onUpdateUserData } = props;
  return (
    <section data-name="UserInfo">
      <RenderTip />
      <div>{JSON.stringify(userInfo)}</div>
      <button
        className="my-btn"
        onClick={() => {
          onUpdateUserData({ name: '奶綠茶', age: 40 });
        }}
      >
        UpdateUserData
      </button>
    </section>
  );
};

export default UserInfo;
