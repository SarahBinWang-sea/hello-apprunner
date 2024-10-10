const compression = require('compression');
const express = require('express');
const app = express();

app.use(compression());
const port = 80;

// If you need AWS SDK, import only the services you need
const { S3Client } = require("@aws-sdk/client-s3");

const s3Client = new S3Client({
    region: process.env.AWS_REGION
});

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
    console.log(`Working in region ${process.env.AWS_REGION}`);
}).on('error', (err) => {
    console.error('Error starting server:', err);
});