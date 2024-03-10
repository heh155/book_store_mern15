import express from 'express';
import { Book } from '../models/user.js';

const routers = express.Router();



routers.post("/", async (req, res) => {
    const { title, author, publishYear } = req.body; 

    // Creating a new book entry using the extracted data
    await Book.create({
        title,
        author,
        publishYear
    });

    // Sending a JSON response indicating success
    res.cookie("token","iamin").json({
        success: true,
        msg: "registered"
    });
});
routers.get('/',async(req,res)=>{
    const books = await Book.find({})
    return res.json({
        count:books.length,
        data:books
    });
})
routers.get('/:id',async(req,res)=>{
    const {id}=req.params;
    const books = await Book.findById(id)
    return res.json({
        books
    });
})

routers.put("/:id",async(req,res)=>{
    const {id}=req.params;
    const result=await Book.findByIdAndUpdate(id,req.body);
    return res.send({msg:"done"})
})
routers.delete("/:id",async(req,res)=>{
    const {id}=req.params;
    const result=await Book.findByIdAndDelete(id,req.body);
    return res.send({msg:"delete done"})
})

export default routers;