const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Express API 🚀");
});

app.get("/api", (req, res) => {
    res.json({
        message: "This is your first API endpoint 🚀",
        status: "success"
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
