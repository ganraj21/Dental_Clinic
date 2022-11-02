const express = require('express');
const router = express.Router();
const brcypt = require("bcrypt")
// require('')
const User = require("../model/userModel")
router.get('/',(req,res)=>{
res.send(`Hello world from the server Auth.js`)
})

router.post('/register', async (req,res)=>{
    
    const { name, email, password } = req.body;

    if(!name || !email || !password){
        return res.status(422).json({error:"Plz filled the data"})
    }
    const hashedPassword = await brcypt.hash(password, 10);

    User.findOne({email:email})
        .then((userExist)=>{
            if(userExist){
            return res.status(422).json({error:"Email already Exist"})
        }
        
        const user = new User({name, email, password:hashedPassword })

        user.save().then(()=>{
            res.status(201).json({message:"user registered successfully"})
        }).catch((err)=>{
            res.status(500).json({error:"Database Error"})
        })
    }).catch((err)=>{console.log(err)})
    // try {
    //     const { name, email, password } = req.body;
    //     const usernameCheck = await User.findOne({ name });
    //     if (usernameCheck)
    //       return res.json({ msg: "Username already used", status: false });
    //     const emailCheck = await User.findOne({ email });
    //     if (emailCheck)
    //       return res.json({ msg: "Email already used", status: false });
    //     const hashedPassword = await brcypt.hash(password, 10);
    //     const user = await User.create({
    //       email,
    //       name,
    //       password: hashedPassword,
    //     });
    //     delete user.password;
    //     return res.json({ status: true, user });
    //   } catch (ex) {
    //   }
});

module.exports = router;