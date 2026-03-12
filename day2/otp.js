console.log("otp request")
let seconds=5;
let intervalid=
setInterval(()=>{
    seconds--;
    console.log(`otp in ${seconds}`);
    if(seconds===0){
        console.log("resend");
        clearInterval(intervalid)}},1000)