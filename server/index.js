import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import cookieParser from 'cookie-parser';

import { connectDB } from './db/connectDb.js';

connectDB();

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());


app.listen(port, () => console.log(`Server started on port ${port}`));