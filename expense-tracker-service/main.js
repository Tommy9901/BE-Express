const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

const {startApp} = require("./configs/basic")
const {createNewCategory, getCatergories, getOneCatergory, updateCatergory, deleteCatergory} = require("./services/categoryService");

const app = startApp();


// create
app.get("/categories", (req, res) => {
  const categories = getCatergories();
  res.json(categories);
});

// one category
app.get("/categories/:id", (req, res) => {
  const {id} = req.params;
  const one = getOneCatergory(id);
  res.json(one);
});

app.post("/categories", async (req, res) => {
  const { name } = req.body;
  const id = await createNewCategory({name})
  res.status(201).json({ id });
}); //end

// update
app.put("/categories/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if(!name){
    res.status(400).json({message:  "Name field is required"})
    return;
  }
  await updateCatergory(id, {name});
  res.sendStatus(202);
});

// delete
app.delete("/categories/:id", async (req, res) => {
  const { id } = req.params;
  const deleteIndex = categories.findIndex(cat => cat.id === id);

  if(deleteIndex < 0){
    res.sendStatus(404).json({message: "Name field is required"});
    return;
  }

  await deleteCatergory(id);
  res.sendStatus(204);
});



// transaction CRUD:
