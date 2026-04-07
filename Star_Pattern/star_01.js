// print n number of starts of like 2d .  ex:4
//. in this loop the i represent the row and j represents the column 


let n = 4;

for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < n; j++) {
        row = row + "* "
    }
    console.log(row)
}


// the output will be 


// * * * * 
// * * * * 
// * * * * 
// * * * * 