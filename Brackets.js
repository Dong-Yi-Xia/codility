// Brackets
// Determine whether a given string of parentheses (multiple types) is properly nested.
// Task Score
// 100%
// Correctness
// 100%
// Performance
// 100%
// Task description
// A string S consisting of N characters is considered to be properly nested if any of the 
// following conditions is true:

// S is empty;
// S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, the string "{[()()]}" is properly nested but "([)()]" is not.

// Write a function:

// function solution(S);

// that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

// For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function 
// should return 0, as explained above.


function solution(S) {
    let open = []
    let map = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
   }
    for(let i of S){
        if("([{".includes(i)){
            open.push(i)
        }
        else if(open.pop() !== map[i]){
            return 0
        }
    }
    return open.length === 0 ? 1 : 0
}


function solutions(S) {
    let pair = {
       "(": ")",
       "{": "}",
       "[": "]"
   }
   let open = []
   for(let sym of S){
       if("([{".includes(sym)){
           open.push(sym)
       }else{
           let openSym = open.pop()
           if(pair[openSym] !== sym){ 
               return 0
           }
       }
   }
   return open.length === 0 ? 1 : 0
}
