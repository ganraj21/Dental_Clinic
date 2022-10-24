const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes")

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth",userRoutes)

const config = require("./config");

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

// mongoose.connect(`mongodb://${config.dbHost}`,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
// .then(client =>{
//     const db = client.db(config.dbName);
//     const collection = db.collection(config.dbCollection);
//     app.locals[config.dbCollection] = collection;
// })

// app.use((req,res,next)=>{
//     const collection = req.app.locals[config.dbCollection];
//     req.collection = collection;
//     next();
// })