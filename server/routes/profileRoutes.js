const express = require("express")
const { authorizeUser, checkUser } = require("../middleware/authMiddleware")
let profileRouter = express.Router()

profileRouter.get("/",authorizeUser,checkUser,(req,res)=>{
    let user = req.user
    res.render("profile",{user})
})

module.exports= profileRouter