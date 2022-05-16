// const cores = require('cores');
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.js';

dotenv.config();
const app = express();
app.use(express.json());
const port = 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { connection } = mongoose;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.use('/user', userRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
