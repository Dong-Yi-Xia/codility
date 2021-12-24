// You are given N counters, initially set to 0, and you have two possible operations on them:

// increase(X) − counter X is increased by 1,
// max counter − all counters are set to the maximum value of any counter.
// A non-empty array A of M integers is given. This array represents consecutive operations:

// if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
// if A[K] = N + 1 then operation K is max counter.
// For example, given integer N = 5 and array A such that:

//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the values of the counters after each consecutive operation will be:

//     (0, 0, 1, 0, 0)
//     (0, 0, 1, 1, 0)
//     (0, 0, 1, 2, 0)
//     (2, 2, 2, 2, 2)
//     (3, 2, 2, 2, 2)
//     (3, 2, 2, 3, 2)
//     (3, 2, 2, 4, 2)
// The goal is to calculate the value of every counter after all operations.

// Write a function:

// function solution(N, A);

// that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers representing the values of the counters.

// Result array should be returned as an array of integers.

// For example, given:

//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the function should return [3, 2, 2, 4, 2], as explained above.



// A = [3, 4, 4, 6, 1, 4, 4]

// N = 5
//  1  2  3  4  5
// [0, 0, 0, 0, 0]

// 3 => (0, 0, 1, 0, 0)
// 4 => (0, 0, 1, 1, 0)
// 4 => (0, 0, 1, 2, 0)
// 6 => (2, 2, 2, 2, 2) no where to put 6, everything becomes max num
// 1 => (3, 2, 2, 2, 2)
// 4 => (3, 2, 2, 3, 2)
// 4 => (3, 2, 2, 4, 2)

function solution(N, A) {
    let counters = Array(N).fill(0);
    let max = 0;
    
    for (i = 0; i < A.length; i++) {
        if (A[i] === N + 1) {
            counters = Array(N).fill(max)
        } else {
            //array start at positon 0
            const index = A[i] - 1
            counters[index]++
            //keep track of the max
            if (counters[index] > max) max = counters[index]
        }
        
    }
    return counters
}



function solution(N, A) {
    let counters = new Array(N).fill(0);
    let maxCounter = 0;
    let maxToSet = 0;
    
    for (let i = 0; i < A.length; i++) {
        let X = A[i] - 1;
        
        if (X === N) {
            // lazy update all counters
            maxToSet = maxCounter;
        } else if (0 <= X && X < N) {
            // see if we needed to set it to maxToSet but havent yet
            counters[X] = Math.max(counters[X] + 1, maxToSet + 1);

            maxCounter = Math.max(counters[X], maxCounter);
        }
    }
    
    // update any counters to maxToSet that we havent yet
    counters = counters.map((val) => Math.max(val, maxToSet));
    return counters;
}