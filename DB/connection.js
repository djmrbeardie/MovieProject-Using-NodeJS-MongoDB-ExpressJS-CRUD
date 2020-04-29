const mongoose = require("mongoose");

require("dotenv").config();
//console.log(process.env.MONGOURI);
mongoose.Promise = global.Promise;
var MONGOURI = "mongodb+srv://dbuser:dbuser@cluster0-vfe8d.mongodb.net/test?retryWrites=true&w=majority";


const connectDB = async() => {
    await mongoose.connect(MONGOURI, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("db connected...!");
    mongoose.set('useFindAndModify', false);
}

module.exports = connectDB;