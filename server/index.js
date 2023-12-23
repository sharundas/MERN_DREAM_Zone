import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js'


dotenv.config();


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });



const app = express();

app.use(express.json());


app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});



app.use('/api/auth', authRouter);



// mern_dream_zone - username
// uVDkNhaZ3wdAr5lp - pass mongodb