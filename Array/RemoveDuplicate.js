// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.

// apply here two pointer method that we dont have to  create the new 
// array here modify the existing arrray so 


// solution 

let  nums = [0,0,1,1,1,2,2,3,3,4]

let removeDuplicate=(nums)=>{

    let k=0;  // its an pointer that checks the value of the array

    for (let i=0;i<nums.length; i++){
        if(nums[i]>nums[k]){ // condition that check each element forward by i and k if greater value found then update teh pointer k value 
            k=k+1 // update the pointer for next evelution 
            nums[k]=nums[i]  //replave or update teh value of index value by find greater valye by k 

        }
    }

    console.log("sortedArray",nums.slice(0,k+1))
    console.log("k",k+1)
    return k+1   // the legth is alwayes greater by index so 
    

}

removeDuplicate(nums)