const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Woooorld!");
});

// app.get("/", (req, res) => {
//     res.send("Hello Woooorld!");
//   });

app.get("/articles", (req, res) => {
    // tootsoolol
    res.json([
        { id: 1, title: "Hi aaall"},
        { id: 2, title: "What's uuuup guys"},
        { id: 3, title: "Byee aaaaall"},
    ]);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});