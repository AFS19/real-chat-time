const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      `https://api.chatengine.io/users/`,
      {
        username: username,
        secret: username,
      },
      {
        headers: { "private-key": process.env.CHAT_ENGINE_PRIVATE_KEY },
      }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

app.listen(PORT, console.log(`App run on the port: ${PORT}`));
