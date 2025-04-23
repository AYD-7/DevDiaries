import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'

// Package that allows the processing of the MongoDB connection string from the .env file
dotenv.config();


// Connecting to the database
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB is connected");//Success message 
        
    }).catch((err) => {
        console.log(err);// Error message
        
    })

// Creating the server
const app = express();

// Port where the server is going to run
app.listen(3000, () => {
    console.log("Server is now running at port 3000!!!");
    
});

app.use("/api/user", userRoutes);


