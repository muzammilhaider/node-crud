const bcryptjs = require("bcryptjs");

const userModel = require('../models/schema')
const signUpContoller = async (req,res) => {
    let { username, email, password } = req.body;
    const hashPass = await bcryptjs.hash(password, 10)
    const userObj = {
     ...req.body,
     password : hashPass,
    }
    userModel.findOne({email},(error,user)=>{
     if(error){
      console.log(error)
      res.send(error)
     } else if(user){
      res.json({msg : "User already exists"})
     } else{
      userModel.create(userObj,(err,_)=>{
       if(err){
        console.log(err)
        res.send(err)
       } else{
        res.send('User Singup')
       }
      })
     }
    })
   }

module.exports = signUpContoller