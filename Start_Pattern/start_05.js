// solve this pattern 


// first aproch 

// let n = 5
// for (let i = n; i > 0; i--) {
//     let num = ""
//     for (let j = 1; j <= i; j++) {
// num = num + j
//   row = row + "*" // same for start pattern optional
//     }
//     console.log(num)
// }


// second aproch
// the second loop will runs n-i times and print j+1 in rows

let n = 5
for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < n - i; j++) {
        row = row + (j + 1)
        // row = row + "*" // same for start pattern optional
    }
    console.log(row)
}



// the out put will be 

// 12345 
// 1234
// 123
// 12
// 1


// *****
// ****
// ***
// **
// *