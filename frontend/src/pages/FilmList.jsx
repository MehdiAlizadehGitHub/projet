import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
import CardView from "./components/cardview";
import '../App.css';
import './css/Film.css';

function FilmList() {
  const baseUrl = "/api";
  const navigate = useNavigate();

  const [games, setGames] = useState([]);

  useEffect(() => {
    Axios.get(`${baseUrl}/games`)
      .then((response) => {
        setGames(response.data);
      });
  }, []);

  const handleBackToMenu = () => {
    navigate('/');
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1 className="pageTitle">Your List</h1>
          <button className="backButton" onClick={handleBackToMenu}>Back to Menu</button>
        </div>
        <div className="cards">
          {games.map((game) => (
            <CardView
              key={game.idgames}
              id={game.idgames}
              name={game.name}
              cost={game.cost}
              category={game.category}
              className="card"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilmList;
