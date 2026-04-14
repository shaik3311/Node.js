const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

async function userRegister(req,res){
    const {userName,email,password} = req.body;

    const isUserExists = await userModel.findOne({email});

    if(isUserExists!=null){
        return res.status(409).json({
            message:"User already exisits"
        })
    }

    const user = await userModel.create({
        userName,
        email,
        password
    });

    const token = jwt.sign({
        id:user._id   
    },process.env.JWT_SECRET);

    res.cookie("token",token);

    res.status(201).json({
        message:"User registered successfully",
        user : user,
        token : token
    });
}

module.exports = {userRegister}