// print the parren in 0 and 1 form
// the logic is switch the value of 0 and 1 of changing  variable
// we are switching th variable in inner loop so we get the "1 0 1 0" paeen in horizontal line every loop 

let n=5

for(let i=0; i<5; i++){
    let row="" 
    let switch_var=1

    for(let j=0;j<i+1;j++){  
        row=row+switch_var
        // switch_var===1?switch_var=0:switch_var=1
        if(switch_var===1){
            switch_var=0
        }else{
            switch_var=1
        }

    }
    console.log(row)
}

// the output will be 

// 1
// 10
// 101
// 1010
// 10101
