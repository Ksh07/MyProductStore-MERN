import express from 'express';
import dotenv from 'dotenv'

dotenv.config()
const app = express();

app.listen(5000 , ()=>{
    console.log('listening on port 5000');
});
app.get('/', (req, res)=>{
    res.send("Welcome")
});

