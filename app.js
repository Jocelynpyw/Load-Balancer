const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const server = process.env.server || "GateWay";
app.get("/", (req, res, next) => {
  res.send(`<h1>This Request redirect to the server ${server}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
