//  =============Higher-Order Function==========
// A function is called a higher-order function when it:

// accepts another function as an argument, or
// returns another function.

Example:

function calculate(a, b, operation) {
    return operation(a, b); 
}

function add(a, b) {
    return a + b;
}

console.log(calculate(10, 20, add));