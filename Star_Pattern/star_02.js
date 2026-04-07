// print the start pattern
// in every loop the j printed one more over the i this is a key logic 


let n = 4;

for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < i + 1; j++) {
        row = row + "* "
    }
    console.log(row)
}




// the out put will be 

// * 
// * * 
// * * * 
// * * * * 