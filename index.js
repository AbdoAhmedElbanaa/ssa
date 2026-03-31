const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", (req, res) => {
  let data = req.body.data;

  if (data) {
    let decoded = Buffer.from(data, "base64").toString("utf-8");
    console.log("Decoded:", decoded);
  }

  const response = {
    API_NAME: [
      {
        success: "1",
        MSG: "Activated Successfully",

        TOKEN_20: Buffer.from("007178500").toString("base64"),
        TOKEN_30: Buffer.from("com.prrppplayer").toString("base64"),
        TOKEN_40: Buffer.from("full").toString("base64"),

        TOKEN_1: "ok",
        TOKEN_5: "ok",
        TOKEN_7: "ok",
      },
    ],
  };

  res.json(response);
});

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
