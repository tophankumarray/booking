const User=require("../models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const getLogin=(req,res)=>{
    res.render("login")
}

const getSignup=(req,res)=>{
    res.render("signup")
}

const postSignup= async (req,res)=>{
   const {name,email,password}=req.body
   try {
    let existingUser=await User.findOne({email}).lean()
    if (existingUser) {
        return res.redirect("/auth/login")
    } else {
        let saltRounds=await bcrypt.genSalt(10)
    let hashedPassword=await bcrypt.hash(password,saltRounds)
    await User.create({
        name:name,
        email:email,
        password:hashedPassword
    })
    res.status(201).redirect("/auth/login")
    }
   } catch (error) {
    // console.log(error);
    res.redirect("/auth/signup")
   }
}

const postLogin=async (req,res)=>{
    const {email,password}=req.body
    try {
        // verify user
        let existingUser=await User.findOne({email}).lean()
        if (existingUser) {
            // verify password
            const validUser=await bcrypt.compare(password,existingUser.password)
            // console.log(validUser);
            // res.send(existingUser)
            if(validUser){
                const token=await jwt.sign({id:existingUser._id},"SECRET")
                console.log(token);
                // res.send(token)
                res.cookie("jwt",token,{
                    maxAge:24*60*1000,
                    httpOnly:true,
                    secure:true
                })
                // res.render("profile",{user:existingUser})
                res.redirect("/profile/")
            }
        }
    } catch (error) {
        console.log(error);
        res.redirect("/auth/login").alert("Login Failed")
    }
}



module.exports={
    getLogin,getSignup,postSignup,postLogin
}