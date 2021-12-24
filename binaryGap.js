// 1. BinaryGap
// Find longest sequence of zeros in binary representation of an integer.

// Task description
// A binary gap within a positive integer N is any maximal sequence of consecutive zeros
//  that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. 
// The number 529 has binary representation 1000010001 and contains two binary gaps: 
// one of length 4 and one of length 3. 
// The number 20 has binary representation 10100 and contains one binary gap of length 1. 
// The number 15 has binary representation 1111 and has no binary gaps.
// The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap. The 
// function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, 
// because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..2,147,483,647].



// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');



// 0 must be surrounded by 1 to be a gap
// find the max length of 0
// all 1 return 0
// trailing 0 return 0
// find the index of 1 and subtract them -1 to exlude the endpoint. 
// return the max value 

function solution(N) {
    let binary = N.toString(2)
    let ind = []
    for(let i=0; i<binary.length; i++){
        if(binary[i] === "1"){
            ind.push(i)
        }
    }
    let max = 0
    for(let i=0; i<ind.length-1; i++){
        let diff = ind[i+1] - ind[i] - 1
        max = Math.max(max, diff)   
    }
    return max
}

function solution(N) {
    let binary = N.toString(2) 
    let first = binary.indexOf(1)
    let last =  binary.lastIndexOf(1)
    let max = 0
    if(first !== last) {
        let newBinary = binary.slice(first, last+1)
        let zeros = newBinary.split("1")
        zeros.forEach(n => {
            max = Math.max(n.length, max)
        })
    } 
    return max
}