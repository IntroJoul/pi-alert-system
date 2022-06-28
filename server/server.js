const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

let activated = false;

app.get("/activate", (req, res) => {
  activated = true;
  res.send("activated");
  console.log("activated");
});

app.get("/status", (req, res) => {
  res.send(activated);
  console.log("status requested");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
