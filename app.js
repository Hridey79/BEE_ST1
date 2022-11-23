require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const DB='mongodb+srv://HrideyVerma:Kyshaps79@cluster0.5wd1ns5.mongodb.net/mernstack?retryWrites=true&w=majority'
require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

const port = process.env.PORT || 8003;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("server start")
})

app.use(router);
// app.use("/",router)

app.listen(8003, () => {
    console.log(`server is start port number ${port}`);
});