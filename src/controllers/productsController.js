import { Product } from "../model/productSchema.js";

const getProducts = async (req, res) => {
    try {
        const gotProducts = await Product.find()
        if (!gotProducts) {
            // return next({
            //     status: "error",
            //     message: "Couldnot find any product"
            // })
            return res.status(404).json({
                status: "error",
                message: "Couldnot find any product"
            })
        }
        return res.status(201).json({
            status: "success",
            message: "GET SUCCESSFULLY!!",
            gotProducts
        })
        // return next({
        //     status: "success",
        //     message: "GET SUCCESSFULLY!!!"
        // })
    } catch (error) {
        // return next({
        //     status: "error",
        //     message: "Not Allowed!!!"
        // })
        return res.status(404).json({
            status: "error",
            message: "Not Allowed!!!",
            error
        })
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

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log("id", id)
        const toBeDeletedProduct = await Product.findByIdAndDelete(id)
        console.log(100, toBeDeletedProduct)
        if (!toBeDeletedProduct) {
            next({
                status: "error",
                message: "Could not find the product!!!"
            })
        }
        next({
            statusCode: 201,
            status: "success",
            message: "DELETED SUCCESSFULLY!!!"
        })
    } catch (error) {
        next({
            status: "error",
            message: "Not Allowed!!!"
        })
    }
}
export { getProducts, addProduct, deleteProduct };
