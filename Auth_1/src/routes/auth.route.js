const express = require('express');
const authControllers = require('../controllers/auth.controller')

const router = express.Router();

router.post('/register',authControllers.userRegister);

router.get('/test',(req,res)=>{
    console.log("Cookies : ",req.cookies);
    res.status(200).json({
        message:"Cookie fetched succesffuly",
        Cookie : req.cookies
    })
})

module.exports = router

