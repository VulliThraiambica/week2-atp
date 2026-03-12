let temp=[32, 35, 28, 40, 38, 30, 42]
let r= temp.filter(ele=>ele>25)
console.log("above 25 temp",r)
let r2=temp.map(ele=>(ele*1.8+32))
console.log(r2)
let r3=temp.reduce((acc,ele)=> (acc+ele))
console.log("avg",r3/(temp.length))

let r4= temp.findIndex(ele=>ele===28)
console.log("index",r4)

let r5=temp.find(ele=>ele>40)
console.log(r5)