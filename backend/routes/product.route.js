import express from 'express';
import { deleteProducts, getProducts, updateProduct, createProduct } from '../controllers/product.controller.js';
// import { Product } from '../products.modal';


const router = express.Router()

router.post('/', createProduct)
router.delete('/:id', deleteProducts)
router.get('/' , getProducts)
router.put('/:id' , updateProduct)
export default router;