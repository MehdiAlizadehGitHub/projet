import React, { useState } from "react";
import "./card.css"
import FormDialog from "./dialog/dialog";
import axios from "axios";


const Card = (props) => {
    const [open, setOpen] = React.useState(false);

    const cardOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteGame = () => {
        axios.delete(`http:/api/delete/${props.id}`);
    }

    return (
        <>
            <FormDialog open={open} setOpen={setOpen} id={props.id} title={props.title} rating={props.rating} genre={props.genre} />
            <div className="game-card">
                <div className="info">
                    <h4>{props.title}</h4>
                    <p>{props.rating}/10</p>
                    <p>{props.genre}</p>
                </div>
                <div className="actions">
                    <button className="edit" onClick={cardOpen}>Edit</button>
                    <button className="delete" onClick={handleDeleteGame}>Delete</button>
                </div>
            </div>
        </>
    );
};

export default Card;
