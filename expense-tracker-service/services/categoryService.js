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

async function createNewCategory(name, icon, color) {
  const id = uuidv4();
  await sql`insert into category(id, name, icon, color) values (${id}, ${name}, ${icon}, ${color})`;
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
  if (oneCategory.length) {
    return oneCategory[0];
  }
  return null;
}

// delete
async function deleteCatergory(id) {
    await sql`delete FROM category where id = ${id} `;
}

// update
async function updateCatergory(id, {name, icon, color}) {
    await sql`update category set name = ${name}, icon = ${icon}, color = ${color} where id = ${id}`;
}

module.exports = {
  createNewCategory,
  getCatergories,
  getOneCatergory,
  updateCatergory,
  deleteCatergory,
};
