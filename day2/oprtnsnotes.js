//basic operation on array
// java script ecma script

let person= 
{
    name:"ravi",
    age:25
}
// add new property
person.city='hyd'
//update aprop
person.name="bhanu"
console.log(person)
//delete oprtr
delete person.age
console.log(person)

//advanced oprtn on array

// call back func> a func passed an arg for another func
//filter
let testdata=[10,2,87,50,60,87,90]
const r= testdata.filter((element)=> element>40 && element<80)
console.log("filter",r)
const r2= testdata.map((element)=> element+10)
console.log(r2)
let r3= testdata.map((element)=>{
    if (element<50)
        return element+10
    else
        return element-20
})
console.log("map",r3)
let r4= testdata.reduce((accumultor,element)=>accumultor+element)
console.log('sum',r4)
let min=testdata[0]
let max=testdata[0]
let r5=testdata.reduce((a,b)=>{
    if (a<b)
      return a
 else 
    return b })
console.log("min",r5)
    let r6=testdata.reduce((a,b)=>{
    if(a>b)
        return a    
        else
            return b
    })
console.log("max",r6)

let r7=testdata.find(ele=>ele===50)
console.log(r7)

let r8=testdata.findIndex(ele=>ele===500)
console.log(r8)

let data=[9,10,8,4]
let arr=data.sort()
console.log("array",arr)
let arr1=data.sort((a,b)=>b-a)
console.log("array",arr1)
console.log(data)
let arr2=data.toSorted((a,b)=>b-a)
console.log("array",arr2)
console.log(data)


const stud= [
    {id:1,
        names :"ravi", 
        marks:30},
    
         { id:2,
        names :"anu", 
        marks:31},

         {id:3,
        names :"lasya", 
        marks:32},

         {id:4,
        names :"hari", 
        marks:33},

         {id:5,
        names :"sita", 
        marks:34},
    
         ] ;
let sum=stud.reduce((acc,obj)=>acc+obj.marks,0)
console.log(sum)

// ERROR!!

console.log("error")

const err= new Error("new error")
console.log(err.name)
console.log(err.message)




// TRY CATCH
console.log("first")
try{
    console.log(a);
}
catch (err){
    console.log(err.message)

}
console.log("second")
console.log("third")


//modules

