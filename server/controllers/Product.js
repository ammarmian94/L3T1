import Product from "../model/Product.js";

export const createProduct = async (req, res) => {
  const product = new Product(req.body);

  try {
    const doc = await product.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const fetchProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Product.findById(id);
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const fetchAllProducts = async (req, res) => {
  try {
    const doc = await Product.find();
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    }).exec();
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};
