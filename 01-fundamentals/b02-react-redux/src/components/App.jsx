import MyCount from './MyCount';
import MyCountWithAction from './MyCountWithAction';
import UserInfoContainer from '../containers/UserInfoContainer';
import AllContainer from '../containers/AllContainer';

const App = () => {
  return (
    <div className="app">
      <MyCount />
      <MyCountWithAction />
      <UserInfoContainer />
      <AllContainer />
    </div>
  );
};

export default App;
