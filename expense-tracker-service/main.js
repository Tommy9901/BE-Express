const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const { startApp } = require("./configs/basic")
const app = startApp()


const {getOneCatergoryControl, createNewCategoryControl, updateCatergoryControl, deleteCatergoryControl, getCategoriesControl} = require("./controller/categoryController");
const { start } = require("repl");
// const { startApp } = require("./configs/basic")
const {sql} =require("./configs/database")

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

