import React, { useState, useEffect } from 'react'
import './AppMenu.css'
import Axios from "axios";
import Card from "./components/card";

function AppMenu() {

	const baseUrl = "/api"
	console.log(baseUrl)

	const [values, setValues] = useState();
	const [games, setGames] = useState();

	const handleChangeValues = (value) => {
		setValues((prevValue) => ({
			...prevValue,
			[value.target.name]: value.target.value,
		}))
	}

	const handleClickButton = () => {
		Axios.post(`${baseUrl}/register`, {
			name: values.name,
			cost: values.cost,
			category: values.category,
		}).then((response) => {
			console.log(response)
		});
	}

	useEffect(() => {
		Axios.get(`${baseUrl}/games`)
			.then((response) => {
				setGames(response.data)
			})
	}
	)



	return (
		<div className="AppMenu">
			<div className="container">
				<h1 className="backgroundTitle">Welcome</h1>
				<h3 className='centeredTitle'>My Movie List</h3>
				<div className="register-box">
					<button className="register-button" onClick={handleClickButton}>Film List</button>
					<button className="register-button" onClick={handleClickButton}>Add/Edit List</button>
					<button className="register-button" onClick={handleClickButton}>Film Score</button>
				</div>
				<br />
			</div>
		</div>
	)
}

export default AppMenu
