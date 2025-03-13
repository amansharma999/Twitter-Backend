const mongoose = require('mongoose');



const connectDB = async() => {
    await mongoose.connect('mongodb://localhost/twitter_dev');
    // await console.log('DB connected');
}

module.exports = connectDB;