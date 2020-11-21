// 
let getEvenNumbers = (num) => {
if (num % 2 === 0 ){
    console.log('Even numbers'+ [num])
}
if (num % 2 ===1){
    console.log('Odd numbers' + [num])
}
}
const arr =[2,4, 7, 11,15,16];
arr.forEach(getEvenNumbers);
