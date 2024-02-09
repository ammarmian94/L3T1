import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRouter from "./routes/Product.js";
import cors from "cors";

const app = express();
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/products", productRouter);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Database Connected");
}

app.get("/", (req, res) => {
  res.send("listening");
});

app.listen(process.env.PORT, console.log("server is running"));
