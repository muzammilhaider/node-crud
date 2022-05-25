const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    username : {
        type : String
    },
    subject : {
        type : String
    },
    todo : {
        type : String
    },
    created_at : {
        type : Date,
        default : Date.now
    }
})

const TodoModel = mongoose.model("todo",todoSchema)

module.exports = TodoModel