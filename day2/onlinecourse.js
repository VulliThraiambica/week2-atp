//assgnment 
const courses = ["javascript", "react", "node", "mongodb", "express"];
let a=courses.filter(ele=>(ele.length>5))
console.log("lenhgth > 5",a)
const b=courses.map(ele=>ele.toUpperCase())
console.log("upercase",b)
const c=courses.reduce((acc,obj)=> acc+" "+obj)
console.log("concat",c.toUpperCase())
const d= courses.find(ele=> ele==="react")
console.log(d)
const e=courses.findIndex(ele=>ele==="node")
console.log(e)
