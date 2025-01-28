import { product } from "../model/productSchema";

export const getProducts = async (req, res) => {
    return product.find();
}