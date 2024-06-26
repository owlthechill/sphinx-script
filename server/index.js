const express = require("express");

const PORT = process.env.PORT || 8081;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from the server!"});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});