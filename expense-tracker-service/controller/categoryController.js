const { getCatergories, getOneCatergory, createNewCategory, deleteCatergory, updateCatergory } = require("../services/categoryService");

const getCategoriesControl = async  (req, res) => {
    const list = await getCatergories();
    res.json(list);
    
}

const getOneCatergoryControl =  (req, res) => {
    const {id} = req.params;
    const one = getOneCatergory(id);
    res.json(one);
}

const createNewCategoryControl = async (req, res) => {
    const { name } = req.body;
    const id = await createNewCategory({name})
    res.status(201).json({ id });   
}

const updateCatergoryControl = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
      
    if(!name){
        res.status(400).json({message: "Name field is required" })
        return;
    }
    await updateCatergory(id, {name});
    res.sendStatus(202);
}

const deleteCatergoryControl = async (req, res) => {
    const categories = deleteCatergory();
    const { id } = req.params;
    const deleteIndex = categories.findIndex(cat => cat.id === id);
      
    if(deleteIndex < 0){
        res.sendStatus(404).json({message: "Name field is required"});
        return;
    }
    await deleteCatergory(id);
    res.sendStatus(204);
}


module.exports= {
    getCategoriesControl,
    getOneCatergoryControl,
    createNewCategoryControl,
    updateCatergoryControl,
    deleteCatergoryControl,
}