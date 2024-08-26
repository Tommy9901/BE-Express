const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

/*
GLOBAL STANDARTS:

Creat:   POST         /categories
Read:    GET          /categories     chooseOne: /categories/id
Update:  PUT/PUTCH    /categories/id
Delete:  DELETE       /categories/id
*/ 

async function createNewCategory(form){
    const id = uuidv4();
    form.id = id;
    categories.push(form);
    fs.writeFileSync("data/categories.json", JSON.stringify(categories));
    return id;
} 

function getCatergories(){
    const content = fs.readFileSync("data/categories.json", "utf-8");
    const categories = JSON.parse(content);
    return categories;
}

function getOneCatergory(id){}

function updateCatergory(id, update){
    const index = categories.findIndex((cat) => cat.id === id);
    categories[index].name = name;
    fs.writeFileSync("data/categories.json", JSON.stringify(categories));
    return (id , update)
}

function deleteCatergory(id){}

module.exports = {
    createNewCategory,
    getCatergories,
    getOneCatergory,
    updateCatergory,
    deleteCatergory,
}