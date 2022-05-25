const bcryptjs = require("bcryptjs");

const userModel = require('../models/schema')

const loginController = (req,res) => {
    let { email,password } = req.body
    if(!email || !password) {
     return res.send("Invalid fields")
    }
    userModel.findOne({email},async (err,user)=>{
     if(err) {
      res.send(err)
     }
     else if(user) {
      await bcryptjs.compare(password, user.password)
      .then((pass)=>{
       if(pass){
        res.send("login")
       } else{
        res.send("Invalid user")
       }
      })
      .catch((err)=>{
       res.send(err)
      })
     } else {
      res.send("Invalid user")
     }
    })
   }

module.exports = loginController