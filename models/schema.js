const mongose = require("mongoose")

const userSchema = mongose.Schema({
 username : String,
 email : String,
 password : String,
})

const userModel = mongose.model("user",userSchema)

module.exports = userModel