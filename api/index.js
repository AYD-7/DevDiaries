import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB is connected");
        
    }).catch((err) => {
        console.log(err);
        
    })

// Creating the server
const app = express();

// Port where the server is going to run
app.listen(3000, () => {
    console.log("Server is now running at port 3000! You are good to go!! Thank you for using our platform!!!");
    
});

