
let cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

let a =cart.filter((element)=> element.inStock==true)
console.log(a)
let b=cart.map(ele=>({
   name:ele.name,
   totalprice: ele.price

}))
console.log(b)

let c=cart.reduce((a,b)=>a+b.price*b.quantity,0)
console.log("grandtotal",c)

let d=cart.find(ele=>(ele.name==="Mouse"))
console.log(d)

let e=cart.findIndex(ele=>(ele.name==="Keyboard"))
console.log(e)