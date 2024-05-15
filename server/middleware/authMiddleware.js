// json web token
const jwt=require("jsonwebtoken")
const User = require("../models/User")

const authorizeUser =async (req,res,next)=>{
    try {
        let token = req.cookies.jwt
        if(token){
            let decodeToken =await jwt.verify(token, "SECRET")
            if(decodeToken){
                next()
            }else{
                res.redirect("/auth/login")
            }
        }else{
            res.redirect("auth/login")
        }
    } catch (error) {
        res.redirect("/auth/login")
    }
}


const checkUser= ()=>{
    try {
        let token = req.cookies.jwt
        if(token){
            let decodeToken = jwt.verify(token,"SECRET")
            if(decodeToken){
                let id = decodeToken.id
                let user = User.findById(id)
                req.user = user
                next()
            }else{
                req.user = null
                res.redirect("/auth/login")
            }
        }else{
            req.user = null
            res.redirect("/auth/login")
        }
    } catch (error) {
        req.user = null
        res.redirect("/auth/login")
    }
}

module.exports={
    authorizeUser,checkUser
}