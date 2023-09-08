const express = require("express");
const app = express();

const port = process.env.PORT || 8000;

// body parser
app.use(express.json());

// get
app.get("/", (req, res) => {
  res.set({
    "cache-control": "public, max-age=6000",
  });
  return res.status(200).json({
    message: "Welcome!",
  });
});

// post
app.post("/post-endpoint", (req, res) => {
  let data = req.body;
  return res.status(200).json({
    data,
  });
});

app.get("/error", (req, res) => {
  res.status(500).json({
    message: "error",
  });
});

// catch all route
app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

// start server
app.listen(port, () => {
  console.log(`server started on port: ${port}`);
});
