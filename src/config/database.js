import mongoose from 'mongoose';



export const connectDB = async() => {
    await mongoose.connect('mongodb://localhost/twitter_dev');
    // await console.log('DB connected');
}

