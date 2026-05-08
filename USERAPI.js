//create http server

import exp from 'express'
export const userapp=exp.Router()// 


//rest client dummy front end
    // create api
    userapp.get('/users',(req,res)=>{
        res.json({message:"users",payload:users})
    })

    //handle post req
    userapp.post('/users',(req,res)=>{
        // get user data from req body 
        const userObj=req.body
        users.push(userObj)
        res.json({message:"user created",payload:userObj})
    })


    userapp.put('/users',(req,res)=>{
        // get modified user data from req body
        let modifiedUserObj=req.body
// get index of existing user in users array
let index=users.findIndex(user=>user.id==modifiedUserObj.id)
// if user found 
if(index===-1){
    res.json({message:"user not found"})
}
//update user with index
users.splice(index,1,modifiedUserObj)
        res.json({message:"user updated"})})         




        userapp.delete('/users/:id',(req,res)=>{
//get id of user from url parameter
//console.log(req.params) //{id:5}
let idofurl=Number(req.params.id)
//find index of  user 
let index =users.findIndex(ele=>ele.id===idofurl)
if(index===-1)
{
    return res.json({message:"user not found to delete"})
}
users.splice(index,1)
res.json({message:"this res for deleted user req"})
        })

        // route to read user by id
        userapp.get("/users/:id",(req,res)=>{
            let idofurl=Number(req.params.id)
            let user=users.find(ele=>ele.id===idofurl)
            if(user===undefined){
                return res.json({message:"user not found"})
            }
            res.json({message:"user found",payload:user})
        })

