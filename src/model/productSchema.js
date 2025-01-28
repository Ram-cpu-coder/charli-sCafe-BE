import mongoose, { Schema } from "mongoose";
// product schema
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        lowercase: true
    },
    rating: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
})

// Product model
export const product = mongoose.model("Product", productSchema)