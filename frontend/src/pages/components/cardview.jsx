import React, { useState } from "react";
import "./card.css"
import FormDialog from "./dialog/dialog";
import axios from "axios";


const CardView = (props) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <FormDialog open={open} setOpen={setOpen} id={props.id} name={props.name} cost={props.cost} category={props.category} />
            <div className="game-card">
                <div className="info">
                    <h4>{props.name}</h4>
                    <p>${props.cost}</p>
                    <p>{props.category}</p>
                </div>
            </div>
        </>
    );
};

export default CardView;
