// write a function that search for an element in an array and returns index,
// if the element not found return -1


let arr = [4, 2, 0, 14, 20, 34]

function searchElement(x) {

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === x) return i
    }
    return -1
}

const result = searchElement(20)

console.log(result)
