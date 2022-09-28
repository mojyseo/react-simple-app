import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';


import './App.css';
import Navbar from "components/Navbar";

import Builder from "pages/Builder"

import { useAppSelector } from 'app/hooks';
import {
  getMode
} from 'app/features/themeSlice';
// import { routesTypes } from 'library/types';

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
  const mode = useAppSelector(getMode)

  return (
    <AppContainer theme={mode}>
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
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div<{ theme: string }>`

  background: ${({ theme }) => theme === "dark" ? '#222' : "#fff"};
  padding-top: 48px;
height: 100vh;
overflow: auto;
transition: background .25s ease-in-out;
  color: ${({ theme }) => theme === "dark" ? '#fff' : "#000"};

.btn {
  padding: 12px 20px;
  text-decoration: none;
  color: ${({ theme }) => theme === "dark" ? '#393939' : "#fff"};
  background: ${({ theme }) => theme === "dark" ? '#fff' : "#393939"};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
}
.btn-dark {
  padding: 12px 20px;
  text-decoration: none;
  background: ${({ theme }) => theme === "dark" ? '#393939' : "#fff"};
  color: ${({ theme }) => theme === "dark" ? '#fff' : "#393939"};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
}
.row {
  display: flex;
  justify-content: space-between;
}
`