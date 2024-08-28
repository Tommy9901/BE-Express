const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { sql } = require("../configs/database");

/*
GLOBAL STANDARTS:

Creat:   POST         /categories
Read:    GET          /categories     chooseOne: /categories/id
Update:  PUT/PUTCH    /categories/id
Delete:  DELETE       /categories/id
*/

async function createNewCategory(name) {
  const id = uuidv4();
  await sql`insert into category(id, name) values (${id}, ${name})`;
  return id;
}

// list
async function getCatergories() {
  const list = await sql`select * FROM category`;
  return list;
}

// chooseOne
async function getOneCatergory(id) {
  const oneCategory = await sql`select * FROM category where id = ${id}`;
  if(oneCategory.length){
    return oneCategory[0];
  }
  return null;
}

// delete
async function deleteCatergory(id) {
    const result = await sql`delete FROM category where id = ${id} `;
}

// update
async function updateCatergory(id, update) {
    const result = await sql`update category set name = ${update.name} where id = ${id}`;
    console.log({result}) 
}


module.exports = {
  createNewCategory,
  getCatergories,
  getOneCatergory,
  updateCatergory,
  deleteCatergory,
};
