

// assgnment
 const user2 = {
                id: 101,
                name: "Ravi",
                preferences:
                 {
                  theme: "dark",
                  language: "en"
                }
              };

let copyuser2={...user2,name:"bhanu",}
copyuser2.preferences.theme="light"
console.log(user2)
console.log(copyuser2)

