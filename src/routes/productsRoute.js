import express from "express";
import getProducts from "../controllers/productsController";

// initialise the router of express
const router = express.Router()

// further routing
router.route("/add").post(getProducts)

export default router;