const express = require("express");
const cors = require("cors");

const app = express()

app.use(express.json());
app.use(cors());

const {
    getFruit,
    postFruit,
    putFruit,
    deleteFruit
} = require("./controller")

app.get("/api/database", getFruit);
app.post("/api/database", postFruit);
app.put("/api/database", putFruit);
app.delete("/api/database", deleteFruit);

app.listen(4004, () => console.log("Server running on port 4004"));