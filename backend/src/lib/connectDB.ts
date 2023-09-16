import mongoose from 'mongoose';
import env from './env';

const connectDB = async () => {
  try {
    await mongoose.connect(env.mongoUrl);
    console.log('database connected successfully');
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
