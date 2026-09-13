const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from my DevOps CI application!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP"
    });
});

module.exports = app;
