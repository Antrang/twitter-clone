require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
//DB Connection
require("./configs/database").connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')));
//Auth Route
const authRoute = require('./routes/Auth');

app.use('/auth', authRoute);



app.listen(PORT, () => {
    console.log("Server listening at port: " + PORT);
})