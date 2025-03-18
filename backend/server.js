import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './db.js';
import { Product } from './products.modal.js';
dotenv.config()
const app = express();

//middleware - required for parsing req.body {line 18}
app.use(express.json());

app.listen(5000, () => {
    connectDB()
    console.log('listening on port 5000');
});


//read through the below method, and try to self evaluate why did we fllow this order.
app.post('/api/products', async (req, res) => {
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

})
app.delete('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: `Product with id: ${id} deleted successfully` })
    } catch (error) {
        console.log("Error while deleting: ", error.message)
        res.status(404).json({ success: false, message: "Product not found" })
    }
})
app.get('/', (req, res) => {
    res.send("Welcome123")
});

