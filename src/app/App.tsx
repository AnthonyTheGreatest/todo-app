import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import About from '../components/About';
import MainApp from '../components/MainApp';
import Root from '../components/Root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/app" element={<MainApp />} />
      <Route path="/about" element={<About />} />
    </Route>,
  ),
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
