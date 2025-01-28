import { Product } from "../model/productSchema.js";
const getProducts = async (req, res) => {
    try {
        console.log("hello");
        res.send("run");
    } catch (error) {
        console.log(error);
    }
};

const addProduct = async (req, res) => {
    try {
        const { name, price, rating, img, description } = req.body;

        if (!name || !price || !rating || !img || !description) {
            return res.status(400).json({
                status: "Failed",
                message: "All fields are required.",
            });
        }

        const existedProduct = await Product.findOne({ name });

        if (existedProduct) {
            return res.status(403).json({
                status: "Failed",
                message: "An product with similar name already exists.",
                existedProduct,
            });
        }

        const product = await Product.create({
            name,
            price,
            rating,
            img,
            description,
        });

        if (!product) {
            return res.status(400).json({
                status: "Failed",
                message: "There was an error creating product.",
            });
        }

        return res.status(200).json({
            status: "Success",
            message: "Product created successfully.",
            product,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "Failed",
            message: "An internal server error occured.",
        });
    }
};

export { getProducts, addProduct };
