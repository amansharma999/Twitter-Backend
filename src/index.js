import express from "express";
import { connectDB } from "./config/database.js";
const app = express();


import Service from "./services/tweet-service.js";

app.listen(3000, async () => {
  console.log("Server is running on port 3000");
  await connectDB();
  console.log("MongoDB connection successful");
  let service = new Service();
  await service.create({ content: "Hello #World" });
});
