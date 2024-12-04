const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Sample routes
app.get('/login', (req, res) => {
    res.send('User Login Endpoint');
});

app.post('/register', (req, res) => {
    res.send('User Registration Endpoint');
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
