import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).json({
        message: "App running Successful {{Prince}}"
    })
})

app.listen(port, ()=>{
    console.log(`App running on port : ${port}`)
})