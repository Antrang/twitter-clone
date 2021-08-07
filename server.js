require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.BACKEND_PORT || 5000;
//DB Connection
require("./configs/database").connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Auth Route
const authRoute = require('./routes/Auth');

app.use('/auth', authRoute);



app.listen(PORT, () => {
    console.log("Server listening at port: " + PORT);
})