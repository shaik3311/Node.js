const express = require('express');

const app = express();

let notes = [];

app.use(express.json())

app.get('/',(req,res)=>{
  res.status(200).json({
    "message":"Hello from server"
  })
});

app.post('/addNote',(req,res)=>{
  notes.push(req.body);
  res.status(201).json({
    "message":"Notes is crated succesfully"
  })
})
app.get('/allNotes',(req,res)=>{
  res.send(notes);
  res.status(200)
})

app.delete('/deleteNote/:index',(req,res)=>{
  let index = req.params.index;
  // delete notes[index]
  notes.splice(index,1);
  res.status(200).json({
    message:`Note of index ${index} deleted successfully`
  })
})

module.exports = app;