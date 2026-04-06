require('dotenv').config();
// import app from src 
const app = require('./src/app');
// import connect DB function 
const connectDB = require('./src/db/db');

connectDB();

// starting server on port no 3000 
app.listen(3000,()=>{
    console.log("server is running on : http://localhost:3000/");
});