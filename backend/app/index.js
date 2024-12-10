const express = require('express');
const server = express();
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

server.use(express.json());
server.use(cors());

server.post("/register", (req, res) => {
    const { title } = req.body;
    const { rating } = req.body;
    const { genre } = req.body;

    let sql = "INSERT INTO movies (title, rating, genre) VALUES (?,?,?)"
    db.query(sql, [title, rating, genre], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    })
});

server.get("/movies", (req, res) => {

    let sql = "SELECT * FROM movies";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }

    })
});

server.put("/edit", (req, res) => {
    const { id } = req.body;
    const { title } = req.body;
    const { rating } = req.body;
    const { genre } = req.body;

    let sql = "UPDATE movies SET title = ?, rating = ?, genre = ? WHERE idmovies = ?";
    db.query(sql, [title, rating, genre, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {

            res.send(result);
        }
    })
});

server.delete("/delete/:index", (req, res) => {
    const { index } = req.params

    let sql = "DELETE FROM movies WHERE idmovies = ?"
    db.query(sql, [index], (err, result) => { err ? console.log(err) : res.send(result) })
})

server.listen(3000, () =>
    console.log("Running in the port 3000")
);
