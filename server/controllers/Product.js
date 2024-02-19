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

export const fetchFeaturedProducts = async (req, res) => {
  // const { id } = req.params;
  try {
    const doc = await Product.find({ deleted: false }).limit(8);
    console.log("Featured");
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const fetchAllProducts = async (req, res) => {
  console.log("All Products");
  let condition = {};
  if (!req.query.admin) {
    condition.deleted = { $ne: true };
  }
  let query = Product.find(condition);
  let totalProductQuery = Product.find(condition);
  if (req.query.category) {
    query = query.find({ category: req.query.category });
    totalProductQuery = totalProductQuery.find({
      category: req.query.category,
    });
  }
  if (req.query.brand) {
    query = query.find({ brand: req.query.brand });
    totalProductQuery = totalProductQuery.find({ brand: req.query.brand });
  }

  // TODO: sorting on discounted price
  if (req.query._sort && req.query._order) {
    query = query.sort({ [req.query._sort]: req.query._order });
  }

  const totalDocs = await totalProductQuery.count().exec();
  // console.log(totalDocs);

  if (req.query._page && req.query._limit) {
    const pageSize = req.query._limit;
    const page = req.query._page;
    query = query.skip(pageSize * (page - 1)).limit(pageSize);
  }

  try {
    const doc = await query.exec();
    console.log(totalDocs);
    res.set("X-Total-Count", totalDocs);
    res.status(201).json(doc);
    // console.log("Response sent");
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
