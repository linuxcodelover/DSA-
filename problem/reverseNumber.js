// reverse  Integer

let number=-1234

let reverseNumber=(num)=>{
    let xCopy=num
    let rev=0
    num=Math.abs(num)

    while(num>0){
         let rem=num%10   
          rev=rev*10 +rem     
          num=Math.floor(num/10)
    }

    let limit =Math.pow(2,31);
    // let limit= 2**31
    if(rev<-limit || rev>limit ) return 0
 return  xCopy<0 ?-rev :rev

}


let result =reverseNumber(number);
console.log("result",result)