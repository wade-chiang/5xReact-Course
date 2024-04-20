import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// TODO
import { lazy, Suspense } from 'react';

import Home from '../Home';
import Menu from '../Menu';

// TODO
const Video = lazy(() => import('../Video'));
const Products = lazy(() => import('../Products'));
const Overlay = lazy(() => import('../Overlay'));

const App = () => {
  return (
    <Router>
      <div className="app">
        <Menu />
        {/* TODO */}
        <Suspense fallback={<div className="text-5xl">Loading</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/video" element={<Video />}>
              <Route path=":id" element={<Overlay />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
