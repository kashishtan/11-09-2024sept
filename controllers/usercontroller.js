const users = require('../users.json');
const fs = require('fs');
function getAllusers(req,res){
    try {
        res.json(users)

    }catch(err){
        console.log(err)
    }
}
function getUser(req,res){
    try{
        let id = parseInt(req.params.id);
        let user = users.find((user)=> user.id === id);
        res.json(user)
    }
    catch(err){
        console.log(err)
    }
}
function addUser(req,res){
    try{
        req.body.id = users.length + 1;
        users.push(req.body);
        fs.writeFile('users.json', JSON.stringify(users),(err)=>{
            if(err){
                console.log(err)
            }
            else{
                res.end("user added .....")
            }
        })

    }catch(err){

    }
}
function editUser(req,res){
    try{
        let id = parseInt(req.params.id);
        let index = users.findIndex((user)=> user.id === id)
         console.log(index);
         users[index].first_name = 'neha';

        fs.writeFile('users.json', JSON.stringify(users),(err)=>{
            if(err){
                console.log(err)
            }
            else{
                res.end("user edit .....")
            }
        })

    }catch(err){

    }
}
function deleteUser(req,res){
    try{
        let id = parseInt(req.params.id);
        let index = users.findIndex((user)=> user.id === id)
         console.log(index);
         users.splice(index,1)
        fs.writeFile('users.json', JSON.stringify(users),(err)=>{
            if(err){
                console.log(err)
            }
            else{
                res.end("user delete .....")
            }
        })

    }catch(err){

    }
}
module.exports = {
    getAllusers,
    getUser,
    addUser,
    editUser,
    deleteUser
}