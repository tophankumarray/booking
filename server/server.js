const express = require("express");
const mongoose = require("mongoose");
let app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRoutes");
const profileRouter = require("./routes/profileRoutes");


async function db(){
    await mongoose.connect("mongodb://127.0.0.1:27017/movieApp")
    console.log("db connected");
}
db();


app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/auth",authRouter);
app.use("/profile",profileRouter)


app.listen(5200,()=>{
    console.log("server is running on port 5200....");
})