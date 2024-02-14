import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';
import errorMiddleware from './middleware/middleware.js';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js';
import listingRouter from './routes/listing.route.js'
import paymentRouter from './routes/payment.route.js';
import path from 'path';


dotenv.config();


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(cookieParser());




app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});



app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/listing', listingRouter);
app.use('/api/',paymentRouter )


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})


app.use(errorMiddleware);


