import express from "express";
import {
  addToCart,
  deleteFromCart,
  fetchCartByUser,
  updateCart,
} from "../controllers/Cart.js";

const router = express.Router();

router
  .post("/", addToCart)
  .get("/", fetchCartByUser)
  .patch("/:id", updateCart)
  .delete("/:id", deleteFromCart);

export default router;
