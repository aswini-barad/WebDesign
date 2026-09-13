function greet(name) {
    console.log("Hello " + name);
}

function process(callback) {
    callback("Rahul");
}

process(greet);