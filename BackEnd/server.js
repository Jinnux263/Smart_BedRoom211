const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get("/", function (req, res) {
  res.send("API is running...");
});


app.listen(
  port,
  console.log(
    `express server is running on port ${port}`
  )
);

