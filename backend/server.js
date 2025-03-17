import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './db.js';

dotenv.config()
const app = express();

app.listen(5000 , ()=>{
    connectDB()
    console.log('listening on port 5000');
});
app.get('/', (req, res)=>{
    res.send("Welcome123")
});

