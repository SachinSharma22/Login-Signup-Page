import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/auth.js'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 5000;

//Middleware
app.use(cors()) // Allow requests from frontend 
app.use(express.json())  // Parse JSON body
app.use('/api', router);
mongoose.connect(process.env.MONGO_URI)
.then(() =>console.log("MongoDb atlas is connected"))
.catch((err) => {
     console.log("Connection Error",err)
})

app.listen(PORT,() => { 
     console.log(`Server running on http://localhost:${PORT}`);
})