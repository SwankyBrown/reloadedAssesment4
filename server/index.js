const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getRage } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get('/api/Rage', getRage)

app.listen(4001, () => console.log("Server running on 4001"));
