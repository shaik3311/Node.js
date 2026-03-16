// import express 
const express = require('express');

// create instance of express server 
const app = express();

// express middleware 
app.use(express.json());


// Array which all tasks simulating database(temporary) for now
let tasks = [];

// Home route
app.get('/',(req,res)=>{
  res.status(200).json({
    message:"Hello welcome to taks manager server"
  })
});

// task adding route with 'POST' method 
app.post('/addTask',(req,res)=>{
  tasks.push(req.body);
  res.status(201).json({
    message:`The taks names ${req.body.title} is created succesfully`
  })
});

// task fectching route with 'GET' method
app.get('/getAllTasks',(req,res)=>{
  res.status(200).json({
    message:"All tasks fetched successfully",
    tasks : tasks
  });
});

// Route for fetching a particular task with 'GET' method
app.get('/getTask/:id',(req,res)=>{
  const id = Number(req.params.id);
  const task = tasks.find(t => t.id === id);
  if(!task){
    return res.status(404).json({
      message: "Task not found"
    });
  }
  res.status(200).json({
    message: `Fetched the task with id ${id}`,
    task
  });
});

// Route to update the status of the task with 'PATCH' method
app.patch('/updateTask/:id',(req,res)=>{
  let id =Number(req.params.id);
  for(let i=0;i<tasks.length;i++){
    if(tasks[i].id == id){
      tasks[i].completed = true;
      break;
    }
  }
  res.status(200).json({
    message:"task status updated"
  })
})
//Route to delete a task 
app.delete('/deleteTask/:id',(req,res)=>{
  let id = Number(req.params.id);
  tasks = tasks.filter((note)=>note.id!=id);
  res.status(200).json({
    message:`The task with id ${id} is deleted`
  })
})




module.exports = app;