import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
// db connection
const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to Database");
    } catch (error) {
        throw error;
    }
}


app.listen(8800, () => {
    connectMongoDb();
    console.log("Connection to backend!");
})