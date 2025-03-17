import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }, 
    image: {
        type: String,
        required: true
    },
},{
    timestamps: true //createdAt, updatedAt
})
export const Product = mongoose.model('Product' , productSchema)