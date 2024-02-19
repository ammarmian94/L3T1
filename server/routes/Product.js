import express from "express";
import {
  createProduct,
  fetchAllProducts,
  fetchProductById,
  fetchFeaturedProducts,
  updateProduct,
} from "../controllers/Product.js";

const router = express.Router();

router
  .post("/", createProduct)
  .get("/:id", fetchProductById)
  .get("/", fetchAllProducts)
  .get("/feature", fetchFeaturedProducts)
  .patch("/:id", updateProduct);

export default router;
// module.exports = router;
