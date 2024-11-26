const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

app.post('/', (req, res) => {
    const data = req.body; // Access the JSON data sent in the request body
    res.send({ message: 'POST request received!', data });
});

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));