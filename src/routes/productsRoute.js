import express from "express";
import { getProducts, addProduct, deleteProduct, deleteManyProducts, updateProduct } from "../controllers/productsController.js";


// initialise the router of express
const productsRouter = express.Router();
// further routing
productsRouter.route("/").get(getProducts);
productsRouter.route("/add-product").post(addProduct);
productsRouter.route("/delete/:id").delete(deleteProduct)
productsRouter.route("/delete").delete(deleteManyProducts)
productsRouter.route("/update/:id").put(updateProduct)

export default productsRouter;
