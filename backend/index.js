import express from 'express';

import mongoose from 'mongoose';
import bookRoutes from './Routes/userRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json())

app.use(cors(
  {
    origin: ["https://book-store-client-zeta.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true
  }
));


mongoose.connect("mongodb+srv://asutoshd08:8ndn7olMXbdGwUdi@cluster0.xnjjoct.mongodb.net/book_store?retryWrites=true&w=majority&appName=Cluster0",{
  dbName:"book_store"
}).then(()=>console.log("db connected"))
.catch((e)=>console.log(e))


app.get("/",(req,res)=>{
    res.json("hello")
})

app.use('/books',bookRoutes)

app.listen(4000,()=>{
    console.log("server is running");
})
