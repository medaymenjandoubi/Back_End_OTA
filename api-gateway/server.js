const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy to User Service
app.use('/api/users', createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true
}));

// Proxy to Flight Service
app.use('/api/flights', createProxyMiddleware({
    target: 'http://localhost:3002',
    changeOrigin: true
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});
