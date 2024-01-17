export const NumInc=(num)=>{
    console.log(num)
    return {
        type:"INCREMENT",
        payload:num
    }
   
}
export const NumDec=()=>{
   return{
    type:"DECREMENT"
   }
}