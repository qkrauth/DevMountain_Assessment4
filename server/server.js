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

app.get("/api/data", getFruit);
app.post("/api/data", postFruit);
app.put("/api/data", putFruit);
app.delete("/api/data", deleteFruit);

app.listen(4004, () => console.log("Server running on port 4004"));