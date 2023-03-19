import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataLayer } from './DataLayer';
import reducer, { initialState } from './reducer';

// Routing
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Search from './pages/Search';

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/search",
    element: <Search/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <RouterProvider router={router} />
    </DataLayer>
  </React.StrictMode>
);

