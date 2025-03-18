import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './db.js';

import productRoutes from './routes/product.route.js'

dotenv.config()
const app = express();

//middleware - required for parsing req.body {line 18}
app.use(express.json());

app.listen(5000, () => {
    connectDB()
    console.log('listening on port 5000');
});
app.use("/api/products", productRoutes)


