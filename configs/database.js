require('dotenv').config();
const mongoose = require("mongoose");
const { DB_RUL } = process.env;

exports.connect = () => {
    mongoose
        .connect(DB_RUL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        .then(() => {
            console.log("Successfully connected to database");
        })
        .catch((error) => {
            console.log("database connection failed. exiting now...");
            console.error(error);
            process.exit(1);
        });
};