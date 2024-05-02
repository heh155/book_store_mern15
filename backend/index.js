import express from 'express';

import mongoose from 'mongoose';
import bookRoutes from './Routes/userRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json())

app.use(cors(
  {
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
  }
));


mongoose.connect("mongodb://localhost:27017",{
  dbName:"book_store"
}).then(()=>console.log("db connected"))
.catch((e)=>console.log(e))


app.get("/",(req,res)=>{
    res.json({
        success:true,
        users:[]
    })
})

app.use('/books',bookRoutes)

app.listen(4000,()=>{
    console.log("server is running");
})
