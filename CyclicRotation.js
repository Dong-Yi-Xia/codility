// Tasks Details
// Easy
// 1. CyclicRotation
// Rotate an array to the right by a given number of steps.

// Task description
// An array A consisting of N integers is given. Rotation of the array means that each
//  element is shifted right by one index, and the last element of the array is moved to 
//  the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] 
//  (elements are shifted right by one index and 6 is moved to the first place).

// The goal is to rotate array A K times; that is, each element of A will be shifted 
// to the right K times.

// Write a function:

// function solution(A, K);

// that, given an array A consisting of N integers and an integer K, 
// returns the array A rotated K times.

// For example, given

//     A = [3, 8, 9, 7, 6]
//     K = 3
// the function should return [9, 7, 6, 3, 8]. Three rotations were made:

//     [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
//     [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
//     [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
// For another example, given

//     A = [0, 0, 0]
//     K = 1
// the function should return [0, 0, 0]

// Given

//     A = [1, 2, 3, 4]
//     K = 4
// the function should return [1, 2, 3, 4]

// Assume that:

// N and K are integers within the range [0..100];
// each element of array A is an integer within the range [−1,000..1,000].


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


// k is number of remove from end and add to beginning of array
// slice the end and the beginning add to new array
// if k rotation > array length, its going to repeat 

function solution(A, K) {
    k =  K % A.length 
    let n = []
    let end = A.slice(-k)
    let beg = A.slice(0,-k)
    n.push(...end)
    n.push(...beg)
    return n
}