const express = require('express');
const cors = require('cors');
const fs = require("fs");

const app = express();
const port = 4000;

app.use(cors());

const content = fs.readFileSync("categories.json", "utf-8");
const categories = JSON.parse(content);

app.get("/", (req, res) => {
  res.send("Hello Woooorld!");
});

// create
app.get("/categories/list", (req, res) => {
  res.json(categories);
});
app.get("/categories/create", (req, res) => {
  const { name } = req.query;
  categories.push({ name: name });

  fs.writeFileSync("categories.json", JSON.stringify(categories));

  res.json(["Success"]);
}); //end



// update
app.get("/categories/update", (req, res) => {
  // value
  res.json(["Success"]);
});

// delete
app.get("/categories/delete", (req, res) => {
  // value
  res.json(["Success"]);
});





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