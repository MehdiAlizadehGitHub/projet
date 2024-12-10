import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import FilmList from './pages/FilmList';
import FilmModify from './pages/FilmModify';
import FilmScore from './pages/FilmScore';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/film-list" element={<FilmList />} />
        <Route path="/film-modify" element={<FilmModify />} />
        <Route path="/film-score" element={<FilmScore />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
