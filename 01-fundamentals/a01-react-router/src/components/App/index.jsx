import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// TODO phase2
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../Home';
import Menu from '../Menu';
// TODO phase2
// import Products from '../Products';
import Products from '../Products/indexV2';
import Video from '../Video';
import Overlay from '../Overlay';

const App = () => {
  return (
    // TODO
    <Router>
      <div className="app">
        <Menu />
        {/* TODO */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/video" element={<Video />}>
            <Route path=":id" element={<Overlay />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
