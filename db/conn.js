const mongoose = require("mongoose");
const DB='mongodb+srv://HrideyVerma:Kyshaps79@cluster0.5wd1ns5.mongodb.net/mernstack?retryWrites=true&w=majority'
// const DB = process.env.DATABASE


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));