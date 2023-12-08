import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import CreateSession from './pages/Session/Create-session';
import KidsProfile from './pages/KidProfile/kid-profile';
import Home from './pages/Home/home';
import EditGame from './pages/editGame/editGame';
import Login from './pages/Login/Login';
import './App.css';

import'./App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login  />}></Route>
        <Route path='EditGame' element={<EditGame />}></Route>
        <Route path='Home' element={<Home />}></Route>
        <Route path='Session' element={<CreateSession />}></Route>
        <Route path='Profile' element={<KidsProfile />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
