const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./apiRoutes')); // Pass api requests to the API routes

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is running on port ${port}`))