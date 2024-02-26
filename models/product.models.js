import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    featured: {type: Boolean, default: false},
    rating: {type: Number, default: 4.8},
    createdAt: {type: Date, default: Date.now()},
    company: {type: String, required: true},
})

const Product = new mongoose.model("Product", productSchema)
export default Product;