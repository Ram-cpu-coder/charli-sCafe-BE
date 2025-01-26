import express from "express";
import products from "../controllers/productsController.js";
// initialise the router of express
const productsRouter = express.Router()
// further routing
productsRouter.route("/products").get(products)

export default productsRouter;