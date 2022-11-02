const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// const DB = process.env.MONGO_URL;
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
// link the router files to make our route easy
app.use(require('./router/auth'));


// app.use("/api/auth",userRoutes)

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB Connection Successfully");
}).catch((err)=>{
    console.log(err.message)
})

const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server Started on Port ${process.env.PORT}`)
})

