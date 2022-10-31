const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes")

const DB = process.env.MONGO_URL;
const app = express();
require("dotenv").config();

app.use(cors({'Access-Control-Allow-Origin': '*'}));
app.use(express.json());

app.use("/api/auth",userRoutes)


mongoose.connect(DB, {
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

