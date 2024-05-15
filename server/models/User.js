const {Schema,model} = require("mongoose")

const authSchema= new Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    }
},
{
    timestamps:true
})

module.exports=model("user",authSchema)