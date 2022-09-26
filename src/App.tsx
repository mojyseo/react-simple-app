import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route, createBrowserRouter, RouterProvider,
} from 'react-router-dom';



import './App.css';
import Navbar from "components/Navbar";

import Builder from "pages/Builder"

import { routesTypes } from 'library/types';

const routes = [
  {
    title: "biography",
    link: '/',
    element: <></>
  },
  {
    title: 'builder',
    link: '/builder',
    element: <Builder />
  },
  {
    title: "content",
    link: '/content',
    element: <Builder />
  },
]


function App() {

  return (
    <Router>
      <header>
        <Navbar routes={routes} />
      </header>
      <Routes>
        {routes.map((item: any, key) => (
          <Route path={item.link} element={item.element} key={key} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
