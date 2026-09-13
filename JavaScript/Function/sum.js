function add(...numbers) {

    let sum = 0;

    for (let n of numbers) {
        sum += n;
    }

    return sum;
}

console.log(add(10, 20));
console.log(add(10, 20, 30, 40));