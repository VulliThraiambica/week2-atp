const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

                let deep= structuredClone(order)
                console.log(deep)
                deep.customer.address.city="chenai"
                deep.items[0].price=95894
                console.log(order)
                console.log(deep)