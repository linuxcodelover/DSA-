// prin the pattern with start and spaces

// to print row need j and to give new line in parent loop of i you need empty spaces variable 
//  like start-with-space=""
//   in the row first space is total number is space with start both are lenearly increase 
//   and decrease with each loop count and patten form 
// in the first loop the i print the new value with new line because it's a loop inteval 

// in the main loop i it is a variable that runs the till the innere loop are not completed 
// we want the comination of tow pattern start and space so we need tow inner loop inside parent so that before print next line that two comination of tpw pattern will print in the same line 

// in term of i we are writing the logic i i increase the star and spaces will change so 
// if you wan to to print in row so the i variable is reponsible and to vethat i and modify that row wo the inner loops are reponsibe 

// to join or add the multiple star and space you do row = row + "*" and row = row + " "

//                             n=5
// i will increase  0 1 2 3 4  == i
// star  will   *   1 2 3 4 5  == i+1 
// space will  " "  4 3 2 1 0  == n-(i+1) means n-(star) 

let n=5

for(let i=0; i<n; i++){
    let row=""
    for(let j=0; j<n-(i+1); j++){ // in every loop it will run 0 to n-(i+1) for space
        // row=row+"-" //this is a space just for viual perpose i make it "-"
        row=row+" " //original with space
    }
    for(let k=0; k<i+1; k++){   // in every loop it will run the i+1 for star
        row=row+"*"    //this will print in very loop 1 "*" 2 "* *"  3 "* * *" ... horizontaly 
                                                                            // in my language j is printing here in every loop horizonatal     
    }
    console.log(row)
}

// the output both are same but visual purpose 
//      *
//     **
//    ***
//   ****
//  *****

// ----*
// ---**
// --***
// -****
// *****