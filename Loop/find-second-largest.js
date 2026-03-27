// write a function that return the second largest number in an array 

let array = [2, 4, 3, 43, 53, 23, 14]


function SecondLargest(arr) {

    if (arr.length < 2) return "Array shold have at least 2 element"

    let largest = -Infinity;
    let second_largest = -Infinity

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > largest) {
            second_largest = largest
            largest = arr[i]
        } else if (arr[i] > second_largest) {
            second_largest = arr[i]
        }
    }

    return second_largest
}



let result = SecondLargest(array);

console.log(result)