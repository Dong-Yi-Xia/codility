// CountDiv
// Compute number of integers divisible by k in range [a..b].
// Task Score
// 100%
// Correctness
// 100%
// Performance
// 100%
// Task description
// Write a function:

// function solution(A, B, K);

// that, given three integers A, B and K, returns the number of integers within 
// the range [A..B] that are divisible by K, i.e.:

// { i : A ≤ i ≤ B, i mod K = 0 }

// For example, for A = 6, B = 11 and K = 2, your function should return 3, because
//  there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.



function solution(A, B, K) {
    return Math.floor(B / K) - Math.ceil(A / K) + 1;
}