import express from "express";
import { getProducts, addProduct } from "../controllers/productsController.js";
// initialise the router of express
const productsRouter = express.Router();
// further routing
productsRouter.route("/").get(getProducts);
productsRouter.route("/add-product").post(addProduct);

export default productsRouter;
