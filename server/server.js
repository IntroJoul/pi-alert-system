const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/activate", (req, res) => {
  res.send("it works");
  console.log("it works");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
