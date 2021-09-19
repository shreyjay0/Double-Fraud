const express = require("express");
const app = express();
var cors = require('cors')
const mongoose = require("mongoose");
const morgan = require("morgan");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");

mongoose.connect("mongodb://localhost:27017/myapp",{useNewUrlParser :true},()=>{
    console.log("Connected to DB");
})

//middleware
app.use(express.json());
app.use(morgan("common"));
app.use(cors())

app.use("/api/auth",authRoute);
app.use("/api/post",postRoute);


app.listen(3030,()=>{
    console.log("server running at 3030");
})