import { checkStock, getproductbyid } from "./product";
let cartitems=[];
export function addtocart(productid,quantity){
    const product = getproductbyid(productid);
    if(!product) return " product not found";
    if(!checkStock(productid,quantity)) return " not enough stock ";
    const existing = cartitems.find(item=>item.productid===productid)
    if(existing){
        existing.quantity+=quantity;
        return `updated ${product.name} quantity to ${existing.quantity}`;
    }
    cartitems.push({productid,name:product.name,price:product.price,quantity});
    return`${product.name} added to cart`
}

export function removefromcart(productid){
    const index=cartitems.findIndex(item=>item.productid===productid);
    if(index===-1) return " product not in cart ";
    const removed = cartitems.splice(index,1);
    return `${removed[0].name} removed from cart `;
}
export function updatequality(productid,newquantity){
    if(!checkStock(productid,newquantity))return " not enough stock";
    const item=cartitems.find(item=>item.productid===productid);
    if(!item) return " products not in cart";
    item.quantity=newquantity;
    return `${item.name}quantity updated tp ${newquantity}`;
}
export function getcartitems(){
    return cartitems
}
export function getcarttotal(){
    return cartitems.reduces((total,item)=>total+item.price+item.quantity,0);
}
export function clearcart(){
    cartitems=[];
}