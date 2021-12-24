// 1. Dominator
// Find an index of an array such that its value occurs at more than half of indices in the array.
// Task Score
// 100%
// Correctness
// 100%
// Performance
// 100%
// Task description
// An array A consisting of N integers is given. The dominator of array A is the value that occurs in 
// more than half of the elements of A.

// For example, consider array A such that

//  A[0] = 3    A[1] = 4    A[2] =  3
//  A[3] = 2    A[4] = 3    A[5] = -1
//  A[6] = 3    A[7] = 3
// The dominator of A is 3 because it occurs in 5 out of 8 elements of A (namely in those with 
//     indices 0, 2, 4, 6 and 7) and 5 is more than a half of 8.

// Write a function

// function solution(A);

// that, given an array A consisting of N integers, returns index of any element of array A in
//  which the dominator of A occurs. The function should return −1 if array A does not have a dominator.

// For example, given array A such that

//  A[0] = 3    A[1] = 4    A[2] =  3
//  A[3] = 2    A[4] = 3    A[5] = -1
//  A[6] = 3    A[7] = 3
// the function may return 0, 2, 4, 6 or 7, as explained above.



// create a map 
// get the max count and its key value
// length / 2 has to be greater than the number of count, return domniator else return -1

function solution(A) {
    let max = 0
    let key 
    let map = new Map()
    for(let i of A){
        if(!map.has(i)){
            map.set(i, 1)
        }else{
            let v = map.get(i)
            map.set(i, v+1)
        }
    }
    map.forEach((v, k) => {
        if(v>max){
            max = v
            key = k
        }
    })
    let half = Math.floor(A.length / 2 )
    return max > half ? A.indexOf(key) : -1

}
