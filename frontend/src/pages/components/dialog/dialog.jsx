import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";
import axios from "axios";

export default function FormDialog(props) {
    const [editValues, setEditValues] = useState({
        id: props.id,
        title: props.title,
        rating: props.rating,
        genre: props.genre,
    });


    const handleEditValues = () => {
        console.log(props.baseUrl)
        axios.put(`http:/api/edit`, {
            id: editValues.id,
            title: editValues.title,
            rating: editValues.rating,
            genre: editValues.genre,
        });
        handleClose();

    }

    const handleDeleteGame = () => {
        axios.delete(`http:/api/delete/${editValues.id}`)
    }

    const handleChangeValues = (value) => {
        setEditValues(prevValues => ({
            ...prevValues,
            [value.target.id]: value.target.value,
        })
        )
    }

    const handleClickOpen = () => {
        props.setOpen(true);
    };

    const handleClose = () => {
        props.setOpen(false);
    };

    return (
        <div>

            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>Edit</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        defaultValue={props.title}
                        type="text"
                        onChange={handleChangeValues}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="rating"
                        label="Rating"
                        defaultValue={props.rating}
                        type="text"
                        onChange={handleChangeValues}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="genre"
                        label="Genre"
                        defaultValue={props.genre}
                        type="text"
                        onChange={handleChangeValues}
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleEditValues}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
