// write a function that count's the nagative numbers in an array

let arr = [-4, -2, 0, -14, 20, -34]

function countNagatives(x) {
    let count = 0
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < 0) {
            count++
        }
    }
    return count
}

const result = countNagatives()

console.log(result)