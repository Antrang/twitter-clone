require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.BACKEND_PORT || 5000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => {
    console.log("Server listening at port: " + PORT);
})