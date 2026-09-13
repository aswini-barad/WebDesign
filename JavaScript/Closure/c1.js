//  ===============Closures============= 

// A closure occurs when an inner function remembers variables 
// from its outer function even after the outer function has finished executing. 

function outer() {

    let count = 0;

    function inner() {
        count++;
        console.log(count);
    };

    return inner;
}

let counter = outer();

counter();
counter();
counter();