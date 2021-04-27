
// 1. CountFactors
// Count factors of given number n.

// Task description
// A positive integer D is a factor of a positive integer N if there exists 
// an integer M such that N = D * M.

// For example, 6 is a factor of 24, because M = 4 satisfies the above condition (24 = 6 * 4).

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the number of its factors.

// For example, given N = 24, the function should return 8, because 24 has 8 
// factors, namely 1, 2, 3, 4, 6, 8, 12, 24. There are no other factors of 24.


// Example N=25 a perfect square
// 1,2,3,4,5

function solution(N) {
    let count = 0
    for(let i=1; i*i<=N; i++){
        if(i * i === N) count++
        else if(N % i === 0) count += 2
    }
    return count
}