const express = require('express')
const router = express.Router()
const loginController = require('../controllers/loginController')
const {createTodo, getTodo} = require('../controllers/postController')
const signUpContoller = require('../controllers/signupController')

router.post('/api/login',loginController)
router.post('/api/user',signUpContoller)
router.post('/api/todo',createTodo)
router.get('/api/todo',getTodo)

module.exports = router