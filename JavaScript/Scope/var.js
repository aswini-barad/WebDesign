<!-- ===================Function Scope(var) vs Block Scope(let)/const is always fixed=========== -->
function test() {

    if (true) {
        var x = 10;
    }

    console.log(x);
}

test(); //op = 10