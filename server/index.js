import 'dotenv/config';
import express from 'express';
import connectDB from './db/db.js';

// dotenv.config({ path: './env' });

const app = express();
connectDB();
const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
