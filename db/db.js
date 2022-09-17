import mongoose from 'mongoose';
import colors from 'colors';

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log('connected to db');
  } catch (error) {
    process.exit(1);
  }
};

export default connectDb;
