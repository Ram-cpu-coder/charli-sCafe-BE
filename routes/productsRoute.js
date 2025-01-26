import express from "express";
// initialise the router of express
const productsRouter = express.Router()
// further routing
productsRouter.route("/products").get(products)

export default productsRouter;