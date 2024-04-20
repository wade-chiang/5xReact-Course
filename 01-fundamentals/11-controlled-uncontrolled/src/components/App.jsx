import Example1 from './Example1';
import Example2FileUpload from './Example2FileUpload';
import Example3FileUploadV2 from './Example3FileUploadV2';
import Example4FlatPickrComponent from './Example4FlatPickrComponent';
// https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/#conclusion

const App = () => {
  return (
    <div className="app container">
      <Example1 />
      <Example2FileUpload />
      <Example3FileUploadV2 />
      <Example4FlatPickrComponent />
    </div>
  );
};

export default App;
