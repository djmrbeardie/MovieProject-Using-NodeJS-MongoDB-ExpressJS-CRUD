const mongoose = require("mongoose");

require("dotenv").config();
//console.log(process.env.MONGOURI);
mongoose.Promise = global.Promise;


const connectDB = async() => {
    await mongoose.connect(process.env.MONGOURI, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("db connected...!");
    mongoose.set('useFindAndModify', false);
}

module.exports = connectDB;