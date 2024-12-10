import React, { useState } from "react";
import "./card.css"
import FormDialog from "./dialog/dialog";
import axios from "axios";


const Card = (props) => {
    const [open, setOpen] = useState(false);

    const cardOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleDeleteMovie = () => {
        axios.delete(`http:/api/delete/${props.id}`)
            .then(() => {
                props.onDelete(props.id); // Appeler la fonction de suppression du parent
            });
    };

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
                    <button className="delete" onClick={handleDeleteMovie}>Delete</button>
                </div>
            </div>
        </>
    );
};

export default Card;
