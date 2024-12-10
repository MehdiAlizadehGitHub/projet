import React, { useState } from "react";
import "./card.css"
import FormDialog from "./dialog/dialog";
import axios from "axios";


const CardView = (props) => {
	const [open, setOpen] = React.useState(false);

	return (
		<>
			<FormDialog open={open} setOpen={setOpen} id={props.id} title={props.title} rating={props.rating} genre={props.genre} />
			<div className="game-card">
				<div className="info">
					<h4>{props.title}</h4>
					<p>{props.rating}/10</p>
					<p>{props.genre}</p>
				</div>
			</div>
		</>
	);
};

export default CardView;
