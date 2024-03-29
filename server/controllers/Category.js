import Category from "../model/Category.js";

export const fetchAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).exec();
    res.status(200).json(categories);
  } catch (error) {
    res.staus(400).json(error);
  }
};

export const createCategory = async (req, res) => {
  const category = new Category(req.body);
  try {
    const doc = await category.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};
