import { Book } from './models/user.js';




export const homemain=(req,res)=>{
    res.send("MREN STACK PROJECT")
}

export const pushdb= async(req, res) => {
    const { title, author, publishYear } = req.body; // Extracting title, author, and publishYear from the request body

    // Creating a new book entry using the extracted data
    await Book.create({
        title,
        author,
        publishYear
    });

    // Sending a JSON response indicating success
    res.json({
        success: true,
        msg: "registered"
    });
}