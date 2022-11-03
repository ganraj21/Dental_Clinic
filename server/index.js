const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

// link the router files to make our route easy
app.use(require('./router/auth'));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB Connection Successfully");
}).catch((err)=>{
    console.log(err.message)
})


app.listen(process.env.PORT, ()=>{
    console.log(`Server Started on Port ${process.env.PORT}`)
})

