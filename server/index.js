import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import connectDB from './db/db.js';
import defaultData from './default.js';
import router from './routes/routes.js';

// dotenv.config({ path: './env' });

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

connectDB();
const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
defaultData();
