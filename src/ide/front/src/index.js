import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals.js';
import CreateSession from './pages/Session/Create-session.js';
import KidsProfile from './pages/KidProfile/kid-profile.js';
import Home from './pages/Home/home.js';
import EditGame from './pages/editGame/editGame.js';
import Login from './pages/Login/Login.js';
import './App.css';
import createSessionPage from './pages/createSession/createSession';

import'./App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' Component={Login}></Route>
        <Route path='EditGame/:id' Component={EditGame}></Route>
        <Route path='Home' Component={Home}></Route>
        <Route path='Session' Component={CreateSession}></Route>
        <Route path='Profile/:id' Component={KidsProfile}></Route>
        <Route path='createSession' Component={createSessionPage}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);


reportWebVitals();
