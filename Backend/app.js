const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const evProducts = require('./routes/evProducts');
const rtsProducts = require('./routes/rtsProducts');
// const comparisons = require('./routes/comparisons');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors());

// Define Routes
app.use((req, res, next) => {
    console.log("csvhsdvhcsd" + req.url);
    next(); // important to pass control to the next middleware/route
});

app.use('/api/ev-products', evProducts);
app.use('/api/rts-products', rtsProducts);
// app.use('/api/comparisons', comparisons);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));