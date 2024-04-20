import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProtectedRoute from '../../containers/ProtectedRoute';
import Home from '../Home';
import Menu from '../Menu';

const Video = lazy(() => import('../Video'));
const LoginContainer = lazy(() => import('../../containers/LoginContainer'));

const App = () => {
  const loading = useSelector((state) => state.common.loading);
  return (
    <Router>
      <div className="app">
        <div className="container">
          <Menu />
          <div hidden={!loading}>
            <div className="my-spinner" />
          </div>
          <Suspense fallback={<div className="my-spinner" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* TODO */}
              <Route path="/login" element={<LoginContainer />} />
              {/* TODO */}
              <Route
                path="/video"
                element={
                  <ProtectedRoute>
                    <Video />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
