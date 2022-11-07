const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const brcypt = require("bcrypt")
const app = express();
const User = require("./model/userModel")
require("dotenv").config({"path":"./.env"});

app.use(cors());
app.use(express.json());


// app.use(require('./router/auth'));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB Connection Successfully");
}).catch((err)=>{
    console.log(err.message)
})

app.post('/register', async (req,res)=>{

    console.log(req.body)
    const hashedPassword = await brcypt.hash(req.body.password, 10);

    try{
        const userExist = await User.findOne({email:req.body.email})
        if(userExist){
           return res.status(401).json({error:"Email already Exist"})
        }
        const user = new User({name:req.body.name, email:req.body.email, password:hashedPassword })

        const userRegister = await user.save()

        if(userRegister){
            res.status(201).json({message:"user registered successfully"})
        }
    }
    catch(err){
        console.log(err)
    }
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server Started on Port ${process.env.PORT}`)
})

