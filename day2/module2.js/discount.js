const coupons ={
    'welcome10': {type:'percentage',value:10,minamount:1000},
    'flat500': {type:'flat',value:500,minamount:5000},
    'electronics20': {type:'percentage',value:20,minamount:10000,category:'electronics '},
    
};
export function validatecoupon(couponcode,carttotal,cartitems){
    const coupon = coupons[couponcode];
    if(!coupon) return { valid :false ,message:"invald coupon"};
    if(carttotal<coupon.minamount) return {
        valid:false,message:`coupon valid only for $ {coupon.category}`    } 
    }
    if(coupon.category){
        const hascategory = cartitems.some(item=>item.category===coupon.category);
    if(!hascategory) return { valid: false, message:`coupon valid only for ${coupon.category}`
};
    return { valid:true ,message:"coupon applied"}
    }
export function calculatediscount(couponcode,carttotal){
    const coupon =coupons[couponcode];
    if(!coupon) return 0
    if(coupon.type==='percentage')return (carttotal*coupon.value)/100;
    if(coupon.type==='flat') return coupon.value;
    return 0;
}
export function applydiscount(carttotal,couponcode,cartitems){
    const validation=validatecoupon(couponcode,carttotal,cartitems);
    if(!validation.valid)
        return {originaltotal: carttotal,discount:0,finaltotal:carttotal,message: validation.message };

    const discount  =calculatediscount(couponcode,carttotal);
    return {
        originaltotal:carttotal,
        discount:discount,
        finaltotal:carttotal-discount,
        message:validation.message
    };
}