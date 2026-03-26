let arr = [1, 2, 13, 24, 35, 6]

function findLargest() {
    let largestNum = -Infinity
    for (let i = 0; i <= arr.length; i++) {


        if (arr[i] > largestNum) {
            largestNum = arr[i]
        }


    }
    return largestNum
}


let result = findLargest();

console.log(result)