const express = require('express');
const router = express.Router();
router.use(express.json()) 
const usercontroller = require('../controllers/usercontroller');
router.get('/users',(req,res)=>{
    //res.json(users)
    usercontroller.getAllusers(req,res);
})
router.get('/user/:id',(req,res)=>{
    
    usercontroller.getUser(req,res);
})
router.post('/add/user',(req,res)=>{
    
    usercontroller.addUser(req,res);
})
router.delete('/delete/user/:id',(req,res)=>{
    
    usercontroller.deleteUser(req,res);
})
module.exports = router;