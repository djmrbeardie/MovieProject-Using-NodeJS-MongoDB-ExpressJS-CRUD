const express = require("express");
const connectDB = require("./DB/connection");
const app = express();

connectDB();
app.use(express.json({ extended: false }));
app.use("/api/movieModel", require("./API/Movie"));

const Movie = require("./DB/Movie");

const Port = process.env.Port || 3000;



app.get('/', async (req, res) => {  
    const movies = await Movie.find({});
    res.send(movies);
  })


app.listen(Port, () => {
    console.log("Server started at port " + Port);
})

