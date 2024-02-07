const mongoose = require("mongoose");
require('dotenv').config();
const dbPort = process.env.DB;

const connectDB = () =>{
    try {
        mongoose.connect(dbPort);
        console.log(`---Database is connected.`);
    } catch (error) {
        console.log(`Database is not connected.`);
        console.log(`Db is not connect`)
    }
};


module.exports = connectDB;