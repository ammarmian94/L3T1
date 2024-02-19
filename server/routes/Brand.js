import express from "express";
import { fetchAllBrands } from "../controllers/Brand.js";

const router = express.Router();

router.get("/", fetchAllBrands);

export default router;
