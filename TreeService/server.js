const express = require('express');
const { generateStub } = require('./stub-tree');

const PORT = 8080;

const corsHeadersMiddleware = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "Content-type, Accept, Origin");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, PUT");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-type", "application/json");
    res.setHeader("Cache-Control", "no-cache");
    next();
};

const start = () => {

    const server = express();

    server.use(corsHeadersMiddleware);

    server.get("/api/tree", (req, res) => {
        res.json(generateStub())
    });

    server.listen(PORT, ()=>console.log(`service started at ${PORT}`));
};

start();
