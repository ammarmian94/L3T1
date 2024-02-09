import express from "express";
import {
  createProduct,
  fetchAllProducts,
  fetchProductById,
  updateProduct,
} from "../controllers/Product.js";

const router = express.Router();

router
  .post("/", createProduct)
  .get("/:id", fetchProductById)
  .get("/", fetchAllProducts)
  .patch("/:id", updateProduct);

export default router;
// module.exports = router;
