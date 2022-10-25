const express = require('express');
require('dotenv').config();

const connectDb = require('./src/utils/db/db')

connectDb();

const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;

const server = express();
const router = express.Router();

server.listen(PORT, () => {
    console.log(`Server running in ${PORT}`);
})