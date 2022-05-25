const TodoModel = require('../models/todoModel')

const createTodo = (req,res) => {
    // console.log(req);
    const { username, subject, todo } = req.body
    if(!username || !subject || !todo) {
        return res.json({ message : "Fields missing"})
    }
    TodoModel.create(req.body,(err,data)=>{
        if(err) {
            res.send("err",err)
        } else {
            res.send(data)
        }
    })
}

const getTodo = (req,res) => {
    TodoModel.find({},(err,data)=>{
        if(err) {
            res.send("err",err)
        } else {
            res.send(data)
        }
    })
}

module.exports = {createTodo, getTodo}