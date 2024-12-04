const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Sample routes
app.get('/search', (req, res) => {
    res.send('Flight Search Endpoint');
});

app.post('/book', (req, res) => {
    res.send('Flight Booking Endpoint');
});

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Flight Service running on port ${PORT}`);
});
