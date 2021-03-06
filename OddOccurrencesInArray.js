// 1. OddOccurrencesInArray
// Find value that occurs in odd number of elements.

// Task description
// A non-empty array A consisting of N integers is given. 
// The array contains an odd number of elements, and each element of the array can 
// be paired with another element that has the same value,
// except for one element that is left unpaired.

// For example, in array A such that:

//   A[0] = 9  A[1] = 3  A[2] = 9
//   A[3] = 3  A[4] = 9  A[5] = 7
//   A[6] = 9
// the elements at indexes 0 and 2 have value 9,
// the elements at indexes 1 and 3 have value 3,
// the elements at indexes 4 and 6 have value 9,
// the element at index 5 has value 7 and is unpaired.
// Write a function:

// function solution(A);

// that, given an array A consisting of N integers fulfilling the above conditions, 
// returns the value of the unpaired element.

// For example, given array A such that:

//   A[0] = 9  A[1] = 3  A[2] = 9
//   A[3] = 3  A[4] = 9  A[5] = 7
//   A[6] = 9
// the function should return 7, as explained in the example above.

// Write an efficient algorithm for the following assumptions:

// N is an odd integer within the range [1..1,000,000];
// each element of array A is an integer within the range [1..1,000,000,000];
// all but one of the values in A occur an even number of times

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');



// create a hash map
// find the key that is odd

function solution(A) {
    let map = {}
    for(let i of A){
        map[i] = (map[i] || 0) + 1
    }
    for(let key in map){
        if( map[key] % 2 === 1 ) return parseInt(key)
    }
}




function solution(A) {
    let dict = {}
    for (const ele of A) {
        dict[ele] = (dict[ele] || 0 ) + 1
    }

    for(const key in dict) {
        if(dict[key] % 2 === 1){
            return Number(key)
        }
    }
}


// N**2
function solution(A) {
    return findMatch(A)
}

const findMatch = (A) => {
    let search = A[0]
    let first = A.indexOf(search)
    let last = A.lastIndexOf(search)
    if(first !== last) {
        A.splice(last, 1)
        A.splice(first, 1)
        return findMatch(A)
    }
    return search
    
}