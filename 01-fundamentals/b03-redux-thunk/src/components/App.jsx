import MyCount from './MyCount';
import MyCountButton from './MyCountButton';
import UserInfoContainer from '../containers/UserInfoContainer';

const App = () => {
  return (
    <div className="app">
      <MyCount />
      <MyCountButton />
      <UserInfoContainer />
    </div>
  );
};

export default App;
