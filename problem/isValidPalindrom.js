// find the palindrom number

let number =-111

let isValidPalindrom=(num)=>{
    
    if(num<0) return false

    let rev=0
    let numCopy=num

    while(num>0){
        let rem=num%10;
        
        rev=10*rev+rem;
        num=Math.floor(num/10)
    }
    
return rev===numCopy 


}

let result =isValidPalindrom(number)
console.log("result",result);


// by string method 

// let number="1223";

// let isValidPalindrom=(num)=>{

//     let rev=num.split("").reverse().join("")
//     console.log(rev)
//     return  rev===num
// }

// let result =isValidPalindrom(number)
// console.log("result",result);

