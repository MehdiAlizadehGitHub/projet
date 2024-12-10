import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  const handleClickFilm = () => {
    navigate('/film-list'); // Navigate to FilmList
  };
  const handleClickModify = () => {
    navigate('/film-modify'); // Navigate to FilmModify
  };
  const handleClickScore = () => {
    navigate('/film-score'); // Navigate to FilmScore
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="backgroundTitle">Welcome</h1>
        <h3 className='centeredTitle'>To Your Movie List</h3>
        <div className="register-box">
          <button className="register-button" onClick={handleClickFilm}>Film List</button>
          <button className="register-button" onClick={handleClickModify}>Add/Edit List</button>
          <button className="register-button" onClick={handleClickScore}>Film Score</button>
        </div>
        <br />
      </div>
    </div>
  );
}

export default App;
