// const express = require('express');
// const router = express.Router();
// const brcypt = require("bcrypt")
// const User = require("../model/userModel")



// // router.get('/',(req ,res)=>{
// // res.send(`Hello world from the server Auth.js`)
// // })

// router.post('/register', async (req,res)=>{
    
//     const { name, email, password } = req.body;

//     console.log(req.body)
//     // if(!name || !email || !password){
//     //     return res.status(422).json({error:"Plz filled the data"})
//     // }
//     const hashedPassword = await brcypt.hash(password, 10);


//     try{
//         const userExist = await User.findOne({email:email})
//         if(userExist){
//            return res.status(401).json({error:"Email already Exist"})
//         }
//         const user = new User({name, email, password:hashedPassword })

//         const userRegister = await user.save()

//         if(userRegister){
//             res.status(201).json({message:"user registered successfully"})
//         }
//     }
//     catch(err){
//         console.log(err)
//     }
// });

// module.exports = router;