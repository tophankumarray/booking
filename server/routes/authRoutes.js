const express = require("express")
const { getSignup, postSignup, getLogin, postLogin } = require("../controllers/authControllers")
let authRouter = express.Router()



authRouter.get("/signup", getSignup)
authRouter.post("/signup",postSignup)

authRouter.get("/login",getLogin)
authRouter.post("/login",postLogin)

module.exports = authRouter