import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connect } from 'mongoose';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';

const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()
// middlewares

app.use(express.json())
app.use(cors())

// API endpoints
app.use('/api/user' , userRouter);
app.get('/' ,(req,res)=>{
    res.send("API WORKING")
})

app.listen(port, ()=> console.log('server started on PORT : ' + port))