import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  try {
    mongoose.connect(process.env.DATABASE_URL!);
    console.log('connected');
  } catch (err) {
      console.log(err);
  }
}

export default main;
