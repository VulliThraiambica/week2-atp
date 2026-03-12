const products=[
    {id:1,name:'laptop',price:50000,stock:10,category:'electronics'},
        {id:2,name:'phone',price:30000,stock:15,category:'electronics'},
    {id:3,name:'headphones',price:2000,stock:25,category:'accessories'},
    {id:4,name:'mouse',price:500,stock:50,category:'accessories'},
    {id:5,name:'keyboard',price:1500,stock:30,category:'accessories'}

];
export function getproductbyid(id){
    return products.find(p=>p.id===id);
}
export function getallproducts(){
    return products;
}
export function getproductbycategory(category){
    return products.filter(p=>p.category===category);
}
export function searchproducts(query){
    return products.filter(p=>p.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
}
export function checkStock(productid,quantity){
    const product = getproductbyid(productid);
    return product && product.stock >= quantity;
}
export function reducestock(productid,quantity){
    const product = getproductbyid(productid)
    if(product) product.stock-= quantity;
}