const addNew = (text, div) => {
    let newElement = document.createElement("p");
    newElement.textContent = JSON.stringify(text);
    document.getElementById(div).appendChild(newElement);
}

// add
const add = (x, y) => x + y;
addNew(add(2, 4), "add");

// multiply
const multiply = (x, y) => {
    let ans = x;
    for (let i = 1; i < y; i = add(i, 1)) {
        ans = add(x, ans);
    }
    return ans;
}
addNew(multiply(6, 8), "multiply");

// power
const power = (x, y) => {
    let ans = x;
    for (let i = 1; i < y; i = add(i, 1)) {
        ans = multiply(ans, x);
    }
    return ans;
}
addNew(power(2, 8), "power");

// factorial
const factorial = (x) => {
    let ans = 1;
    let y = 1;
    for (let i = 0; i < x; i = add(i, 1)) {
        ans = multiply(ans, y);
        y = add(y, 1);
    }
    return ans;
}
addNew(factorial(4), "factorial");

// fibonacci
const fibonacci = (x) => {
    let f0 = 0;
    let f1 = 1;
    let f2 = add(f0, f1);
    for (let i = 3; i < x; i = add(i, 1)) {
        f0 = f1;
        f1 = f2;
        f2 = add(f0, f1);
    }
    return f2;
}
addNew(fibonacci(8), "fibonacci");