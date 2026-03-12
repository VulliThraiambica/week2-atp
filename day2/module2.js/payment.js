import { reducestock } from "./product";
import { getcartitems,getcarttotal,clearcart} from './cart.js';
import { applydiscount } from "./discount.js";
export function validatepaymentmethod(method){
    return['card','upi','cod'].includes(method);
}
 export function generateorderid(){  
    return 'ord'+Date.now()
}
export function processpayment(paymentmethod,couponcode=null){
    const items=getcartitems();
    if(items.length===0) return {status:'failed',message:'cart is empty'}
}
if(!validatepaymentmethod(payementmethod)) return {status:'failed',message:'invalid payment method'};
const subtotal=getcarttotal();
const discountresult=couponcode?applydiscount(subtotal,couponcode,items):{ originaltotal:subtotal,discount:0,finaltotal:subtotal,message:"no coupon"}
for(let item of items){
    reducestock(item.productid,item.quantity);
}
clearcart();
return {
    orderid:generatoordeid(),
    items:items,
    subtotal:subtotal,
    discount:discountresult.finaltotal,
    paymentmethod:paymentmethod,
    status:'success',
    message:"payment successful "
}