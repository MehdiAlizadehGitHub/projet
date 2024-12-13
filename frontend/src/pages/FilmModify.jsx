import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
import Card from "./components/card";
import '../App.css';
import './css/Film.css';
import logo from '../images/logo/1.svg';

function FilmModify() {
	const baseUrl = "/api";
	const navigate = useNavigate();

	const [movies, setMovies] = useState([]);

	const handleBackToMenu = () => {
		navigate('/');
	};

	const handleUpdateMovie = (id, title, rating, genre) => {
		setMovies((prevMovies) =>
			prevMovies.map((movie) =>
				movie.idmovies === id ? { ...movie, title: title, rating: rating, genre: genre } : movie
			)
		);
	};

	useEffect(() => {
		Axios.get(`${baseUrl}/movies`)
			.then((response) => {
				setMovies(response.data);
			});
	}, []);

	const handleDeleteMovie = (id) => {
		setMovies((prevMovies) => prevMovies.filter((movie) => movie.idmovies !== id));
	};

	return (
		<div className="App">
			{/* Menu de navigation */}
			<div className="navbar">
				<div className="navbar-logo" onClick={handleBackToMenu}>
					<img src={logo} alt="Film List Logo" />
				</div>
				<div className="navbar-item">
					<h2 onClick={() => navigate('/film-list')}>Film List</h2>
					<h2 onClick={() => navigate('/film-modify')}>Add/Edit</h2>
					<h2 onClick={() => navigate('/film-score')}>Score</h2>
				</div>
			</div>

			{/* Contenu principal */}
			<div className="container">
				<div className="cards">
					{movies.map((movie) => (
						<Card
							key={movie.idmovies}
							id={movie.idmovies}
							title={movie.title}
							rating={movie.rating}
							genre={movie.genre}
							onUpdate={handleUpdateMovie}
							onDelete={handleDeleteMovie}
							className="card"
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default FilmModify;
