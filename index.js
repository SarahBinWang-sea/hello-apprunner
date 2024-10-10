var compression = require('compression')
const express = require('express');
const app = express();
const http = require('http');
app.use(compression());
const port = 80;

var AWS = require("aws-sdk");

AWS.config.update({
    region: process.env.AWS_REGION
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});


app.listen(port, () => {
    console.log(`app listening at ${port}`);
    console.log(`working in region ${process.env.AWS_REGION}`)
});
