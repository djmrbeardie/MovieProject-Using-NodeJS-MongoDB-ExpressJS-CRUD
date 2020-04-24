const mongoose = require("mongoose");

const movie_schema = new mongoose.Schema({
    name : {
        type: String
    },
    img: {
        type: String
    },
    summary: {
        type: String
    }
})

module.exports = Movie = mongoose.model("Movie",movie_schema);