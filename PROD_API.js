   
   import exp from 'express'
   export const prodapp=exp.Router()
   
   
   // create prod api with below opeeration
        // create new product({productId,name,brand,price})
        let prod=[]
 prodapp.get('/prod',(req,res)=>{
        res.json({message:"prod",payload:prod})
    })

     prodapp.post('/prod',(req,res)=>{
        // get prod data from req body 
        const prodObj=req.body
        prod.push(prodObj)
        res.json({message:"prod created",payload:prodObj})
    })

prodapp.put('/prod',(req,res)=>{
        // get modified prod data from req body
        let modifiedprodObj=req.body
// get index of existing prod in prod array
let index=prod.findIndex(a=>a.id==modifiedprodObj.id)
// ifprod  found 
if(index===-1){
    res.json({message:"prod not found"})
}
//update prod with index
prod.splice(index,1,modifiedprodObj)
        res.json({message:"prod updated"})})   



          prodapp.delete('/prod/:id',(req,res)=>{
//get id of prod from url parameter
//console.log(req.params) //{id:5}
let idofurl=Number(req.params.id)
//find index of  prod 
let index =prod.findIndex(ele=>ele.id===idofurl)
if(index===-1)
{
    return res.json({message:"user not found to delete"})
}
users.splice(index,1)
res.json({message:"this res for deleted prod req"})
        })

        // route to read user by id
        prodapp.get("/prod/:id",(req,res)=>{
            let idofurl=Number(req.params.id)
            let prod1=prod.find(ele=>ele.id===idofurl)
            if(prod1===undefined){
                return res.json({message:"prod not found"})
            }
            res.json({message:"prod found",payload:prod1})
        })
            