import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
import Card from "./components/card";
import '../App.css';
import './css/Film.css';

function FilmModify() {
	const baseUrl = "/api";
	const navigate = useNavigate();

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		Axios.get(`${baseUrl}/movies`)
			.then((response) => {
				setMovies(response.data);
			});
	}, []);

	const handleBackToMenu = () => {
		navigate('/');
	};

	return (
		<div className="App">
			<div className="container">
				<div className="header">
					<h1 className="pageTitle">Modify Your List</h1>
					<button className="backButton" onClick={handleBackToMenu}>Back to Menu</button>
				</div>
				<div className="cards">
					{movies.map((movie) => (
						<Card
							key={movie.idmovies}
							id={movie.idmovies}
							title={movie.title}
							rating={movie.rating}
							genre={movie.genre}
							className="card"
						/>
					))}
				</div>
			</div>
		</div>
	);
}


export default FilmModify;
