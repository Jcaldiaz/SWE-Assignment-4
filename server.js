const express = require('express');
const path = require('path');
const connectDb = require('./config/db');

const app = express();

// Set the port
const PORT = 4000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Specify the views directory
app.set('views', path.join(__dirname, 'views')); // Absolute path to "views"

// Serve static files (CSS, images, JS) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
connectDb().then(() => {
    console.log('Successfully connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
});

// Define routes for your pages
app.get('/djweb', (req, res) => {
    res.render('djweb', { djName: 'DJ POLO', lastLogin: '08/19/2024' });
});

app.get('/mainpage', (req, res) => {
    res.render('mainpage');
});

app.get('/djwebsite', (req, res) => {
    res.render('djwebsite');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

