import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();

const mongoUrl: string = process.env.MONGO_URL || 'mongodb://localhost:27017';
const port: number = Number(process.env.PORT) || 5000;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log('database connected successfully');
  } catch (err) {
    console.log(err);
  }
};

app.listen(port, async () => {
  await connectDB();
  console.log(`app running on port ${port}`);
});
