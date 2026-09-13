// ================Function Returning Another Function===========
function outer() {

    function inner() {
        console.log("Inner function");
    }

    return inner;
}

let result = outer(); //contains the reference of Inner function

result(); //here execution happens