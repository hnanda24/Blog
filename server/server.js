const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/blog-data")
.then(() => {console.log("DB Connected")})
.catch((err) => console.error("Connection error", err));


app.listen(3000, () => {
console.log("Server is running")
})