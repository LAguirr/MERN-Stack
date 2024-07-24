import express from "express";
import {PORT, mongoDBURL} from './config.js';
import mongoose from 'mongoose'
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//Middleware for handling CORS POLICY
//Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
//Option 2: Allow Customs Origins
/*app.use(
 cors({
    origin: 'http://localhost:3000',
    methods: ['GET','POST','DELETE','PUT'],
    allowedHeaders: ['Content-type'],
  })
);*/
//npm install -D tailwindcss postcss autoprefixer
//npx tailwindcss init -p

app.use(express.json());

app.get('/', (request,reponse)=>{

  console.log(request);
  return reponse.status(234).send('que onda puto');
});

app.use('/books', booksRoute);

mongoose.connect(mongoDBURL)
.then(() => {
  console.log("app connected to database");
  app.listen(PORT, () => {
  console.log('app is listening in port '+ PORT);
  });
})
.catch((error) =>{
  console.log(error);
})