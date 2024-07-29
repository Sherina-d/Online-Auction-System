import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
import cors from "cors";

const app = express();

// Use express.json() to parse JSON bodies
app.use(express.json());

// CORS configuration
app.use(cors({
    origin: 'http://localhost:3000' // Change this to match your React app's URL
  }));

// Load environment variables
dotenv.config();
const port = process.env.PORT || 7000;
const mongourl = process.env.MONGO_URL; // Ensure this matches your .env variable

// Connect to MongoDB
mongoose
  .connect(mongourl)
  .then(() => {
    console.log("DB connected successfully");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((e) => {
    console.error("DB connection error:", e);
  });

// Mount routes
app.use("/api", route);
