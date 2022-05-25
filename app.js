const express = require('express')
const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const app = express()
const PORT = 3000

const userModel = require('./models/schema')
const router = require('./routes/routes')


app.use(express.json())
app.use(express.urlencoded({extended : true}))

const DBURI = `mongodb+srv://admin:admin@cluster0.whyeg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(DBURI)
mongoose.connection.on("connected",()=>console.log('Mongoose Connected'))
mongoose.connection.on("error",(err)=>console.log(err))

// app.use('/',(req,res,next)=>{
//     const user = true
//     if(user){
//         next()
//     }
//     res.send('UnAuth')
// })


//all routes
app.use(router)

app.get('/',(req,res)=>{
 // res.setHeader('Content-Type','text/html')
 res.send('HELLO')
})



app.get('/api/getUser',(req,res)=>{
 // res.setHeader('Content-Type','text/html')
 console.log(req.query);
 res.send("Query Selector")
})

app.get('/api/getUser/:id',(req,res)=>{
 const userName = req.params
 console.log(userName);
 res.send("HOME PAGE")
})

app.delete('/api/deleteUser',(req,res)=>{
 res.send(req.body)
})

app.listen(PORT,console.log(`server is running on ${PORT}`))