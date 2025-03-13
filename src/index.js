const express = require('express');
const connectDB = require('./config/database');
const app = express();

app.listen(3000, async () => {
    console.log('Server is running on port 3000');
    await connectDB();
    console.log('MongoDB connection successful');
    
});
