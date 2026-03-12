
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
/*
Tasks:
    1. filter() students who passed (marks ≥ 40)

    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"*/
let a = students.filter(ele=>(ele.marks>=40))
console.log(a)
let b=students.map(ele=>({
 
name: ele.name,
  marks: ele.marks,
  grade:
    ele.marks >= 90 ? "A" :
    ele.marks >= 75 ? "B" :
    ele.marks >= 60 ? "C" : "D"
}))
console.log(b)

let c=students.reduce((a,b)=> a+b.marks,0)
console.log(c/5)
let d=students.find(ele=>ele.marks===92)
console.log(d)
let e=students.findIndex(ele=>ele.name==="Kiran")
console.log(e)