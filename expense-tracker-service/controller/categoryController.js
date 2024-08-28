const {
  getCatergories,
  getOneCatergory,
  createNewCategory,
  deleteCatergory,
  updateCatergory,
} = require("../services/categoryService");

const getCategoriesControl = async (req, res) => {
  const list = await getCatergories();
  res.json(list);
};

// choose one
const getOneCatergoryControl = async (req, res) => {
  const { id } = req.params;
  const chooseOne = await getOneCatergory(id);
  if(!chooseOne){
    res.status(404).json({message: "Not found"})
    return;
  }
  res.status(201).json(chooseOne);
};


// create
const createNewCategoryControl = async (req, res) => {
  const { name } = req.body;
  const id = await createNewCategory(name);
  res.status(201).json({ id });
};

//  delete
const deleteCatergoryControl = async (req, res) => {
  const { id } = req.params;
  await deleteCatergory(id);
  res.sendStatus(204);
};

// update
const updateCatergoryControl = async (req, res) => {
  const { id } = req.params;
  const input = req.body;
  await updateCatergory( id, input);
  res.sendStatus(204);
};



module.exports = {
  getCategoriesControl,
  getOneCatergoryControl,
  createNewCategoryControl,
  updateCatergoryControl,
  deleteCatergoryControl,
};
