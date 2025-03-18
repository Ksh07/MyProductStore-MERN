import express from 'express';
import { Product } from '../products.modal.js';

export const getProducts = async(req,res)=>{
    try {
        const products = await Product.find({}); //empty means it will find all products
        res.status(200).json({success: true, data: products})
    } catch (error) {
        console.log("Error in fetching products: ", error.message)
        res.status(500).json({success:false, message: "Server Error"})
    }
}
export const updateProduct = async(req,res)=>{
    const {id} = req.params;
    const product = req.body; 
    
    //this if can be handled in catch part
    //Similar to M.S.T.O. 
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message: "Product not found"})
    }
    try {
        //new: true means newProduct variable main ab new product(updated) jayenga , 
        // nahi likhte toh original purane wala jata
        const newProduct = await Product.findByIdAndUpdate(id, product, {new: true})
        res.status(200).json({success: true, data: newProduct})
    
    } catch (error) {
        console.log("Error in Updating Product: ", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
    }
    export const deleteProducts = async (req, res) => {
        const { id } = req.params;
        console.log(id)
        try {
            await Product.findByIdAndDelete(id)
            res.status(200).json({ success: true, message: `Product with id: ${id} deleted successfully` })
        } catch (error) {
            console.log("Error while deleting: ", error.message)
            res.status(404).json({ success: false, message: "Product not found" })
        }
    }
    export const createProduct = async (req, res) => {
        const product = req.body;
        if (!product.name || !product.price || !product.image) {
            return res.status(400).json({ success: false, message: "Please provide all fields" })
        }
        const newProduct = new Product(product);
    
        try {
            await newProduct.save();
            res.status(201).json({ success: true, data: newProduct, message: "Product Created" })
        } catch (error) {
            console.error("Error in Creating Product: ", error.message)
            res.status(500).json({ success: false, message: "Server Error" })
        }
    
    }