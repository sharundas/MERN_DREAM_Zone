import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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


app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});



// mern_dream_zone - username
// uVDkNhaZ3wdAr5lp - pass mongodb