import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import CreateSession from './pages/Session/Create-session';
import KidsProfile from './pages/KidProfile/kid-profile';
import Home from './pages/Home/home';
import EditGame from './pages/editGame/editGame';
import Login from './pages/Login/Login';
import './App.css';
import createSessionPage from './pages/createSession/createSession';

import'./App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' Component={Login}></Route>
        <Route path='EditGame' Component={EditGame}></Route>
        <Route path='Home' Component={Home}></Route>
        <Route path='Session' Component={CreateSession}></Route>
        <Route path='Profile' Component={KidsProfile}></Route>
        <Route path='createSession' Component={createSessionPage}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
