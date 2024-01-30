require('dotenv').config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const privateKey = process.env.PRIVATE_KEY
const apiUrl = process.env.API_URL

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));


app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            apiUrl,
            { username: username, secret: username, first_name: username },
            {
                headers: {
                    "Private-Key": privateKey
                }
            }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(3001);