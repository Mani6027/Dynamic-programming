//What is fib series?
// fib series is nothing its nothing but a previos two numbers sum.
// Eg. 1,1,2,3,5,8,13,21,35....

// This is a classic problem.
const fib1 = (n) => {
    if (n <= 2) return 1;
    else{
        return fib(n-1) + fib(n-2);
    }
};


// Lets solve using DP approach.
// We are going to use memoziation.
const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    // you should pass memo too, it will take the same obj ref to update the memo object.
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n]
};

// Lets say we need to calculate fib of 4 :
// 1 2 3 4 or 0 1 2 3 .
// 1 1 2 3 or 1 1 2 3 .
// From the above explaination we come to know that fourth place value is 3.
// so the output is 3.
// Same applicable for all the inputs.
console.log(fib(4)); 
console.log(fib(5));
console.log(fib(8));

// But for this number it will take too long to execute why ?
// Bottle neck in this function is 2^n. 2^50.
// After implementing DP approach - Now we can avoid the bottle neck, by using memoziation.
console.log(fib(30));