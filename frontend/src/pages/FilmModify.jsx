import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
import Card from "./components/card";
import '../App.css';
import './css/Film.css';

function FilmModify() {
	const baseUrl = "/api";
	const navigate = useNavigate();

	const [values, setValues] = useState();
	const [movies, setMovies] = useState([]);

	const handleChangeValues = (value) => {
		setValues((prevValue) => ({
			...prevValue,
			[value.target.name]: value.target.value,
		}))
	}

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
	});

	const handleDeleteMovie = (id) => {
		setMovies((prevMovies) => prevMovies.filter((movie) => movie.idmovies !== id));
	};
	return (
		<div className="App">
			<div className="container">
				<div className="header">
					<h1 className="pageTitle">Modify Your List</h1>
					<button className="backButton" onClick={handleBackToMenu}>Back to Menu</button>
				</div>
				<div className="cards">
					{typeof movies !== 'undefined' &&
						movies.map((movie) => (
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
