



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