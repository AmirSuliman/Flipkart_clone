import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
  try {
    const dbConnectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}`
    );
    console.log(
      `Database connected successfully! Hosted: ${dbConnectionInstance.connection.host}`
    );
  } catch (error) {
    console.error('Db Error: ', error);
    // throw Error('db error:', error);
    process.exit(1);
  }
};

export default connectDB;
