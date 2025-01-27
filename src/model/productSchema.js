import mongoose, { Schema } from "mongoose";
// product schema
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    default: "",
  },
});

// Product model
export const Product = mongoose.model("Product", productSchema);
