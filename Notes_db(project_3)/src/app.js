const express = require("express");
const noteModel = require("./models/note.model")

const app = express();
app.use(express.json());

app.post("/notes", async(req,res)=>{
    const note = req.body;
    await noteModel.create({
        title : note.title,
        description : note.description
    });
    res.status(201).json({
        messsage:"note created"
    })
});

app.get("/notes",async (req,res)=>{
    const notes = await noteModel.find()
    res.status(200).json({
        message:"Notes fecthed successfully",
        Notes : notes
    })
})



module.exports = app;