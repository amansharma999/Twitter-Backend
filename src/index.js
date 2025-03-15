import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./config/database.js";

import apiRoutes from "./routes/index.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRoutes); //mounting the routes


app.listen(3000, async () => {
  console.log("Server is running on port 3000");
  await connectDB();
  console.log("MongoDB connection successful");
});
