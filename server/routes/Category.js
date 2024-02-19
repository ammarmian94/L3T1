import express from "express";
import { fetchAllCategories } from "../controllers/Category.js";

const router = express.Router();

router.get("/", fetchAllCategories);

export default router;
