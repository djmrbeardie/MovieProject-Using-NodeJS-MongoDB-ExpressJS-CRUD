const express = require("express");
const mongoose = require("mongoose");
const Movie = require("../DB/Movie");
const bodyParser = require("body-parser");
const app = express.Router();


//Middleware
app.use(bodyParser.json());


const Movies = mongoose.model("Movie");

app.post("/", async(req, res) => {
    const{name,img,summary} = req.body;
    let movie = {};
    movie.name = name;
    movie.img = img;
    movie.summary = summary;
    let movieModel = new Movie(movie);
    await movieModel.save();
    res.json(movieModel);
})

app.get("/", async(req, res) => {
    try {
         const movies = await Movies.find({});
         res.send(movies);
         //res.json("sample text...");
    } catch (error) {
        res.status(500);
    }
})

//To Display only a single data
app.get("/:movieId", async(req, res) => {
    try {
         const movies = await Movies.find({ _id: req.params.movieId});
         res.send(movies);
         //res.json("sample text...");
    } catch (error) {
        res.status(500);
    }
})

//To Update data => PUT
app.put("/:movieId", async(req, res) => {
    try {
         const movies = await Movies.findOneAndUpdate({
             _id: req.params.movieId
         }, req.body, {
             new : true,
             runValidators: true
         });
         res.send(movies);
         //res.json("sample text...");
    } catch (error) {
        res.setDefaultEncoding(500);
    }
})

//To Delete data =>
app.delete("/:movieId", async(req, res) => {
    try {
         const movies = await Movies.findOneAndDelete({
             _id: req.params.movieId
         })
         res.send(movies);
         //res.json("sample text...");
    } catch (error) {
        res.send(500);
    }
})

module.exports = app;