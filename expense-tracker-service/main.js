const { startApp } = require("./configs/basic");
const app = startApp();

// import
const {
  getOneCatergoryControl,
  createNewCategoryControl,
  updateCatergoryControl,
  deleteCatergoryControl,
  getCategoriesControl,
} = require("./controller/categoryController");


// Catergory CRUD

// list
app.get("/categories", getCategoriesControl);

// one category
app.get("/categories/:id", getOneCatergoryControl);

// create
app.post("/categories", createNewCategoryControl);

// update
app.put("/categories/:id", updateCatergoryControl);

// delete
app.delete("/categories/:id", deleteCatergoryControl);
